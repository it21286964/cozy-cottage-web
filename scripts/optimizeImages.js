import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const OUTPUT_DIR = path.join(__dirname, '../public/optimized-images');

// Image sizes for responsive loading
const SIZES = {
  thumbnail: 150,
  small: 300,
  medium: 600,
  large: 1200,
  xlarge: 1920,
};

// Quality settings for different formats
const QUALITY = {
  webp: 80,
  jpeg: 85,
  png: 90,
};

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath, outputPath, width, height, format = 'webp') {
  try {
    const image = sharp(inputPath);
    
    // Resize image
    if (width || height) {
      image.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }
    
    // Convert to specified format with quality settings
    switch (format) {
      case 'webp':
        await image.webp({ quality: QUALITY.webp }).toFile(outputPath);
        break;
      case 'jpeg':
        await image.jpeg({ quality: QUALITY.jpeg }).toFile(outputPath);
        break;
      case 'png':
        await image.png({ quality: QUALITY.png }).toFile(outputPath);
        break;
      default:
        await image.webp({ quality: QUALITY.webp }).toFile(outputPath);
    }
    
    console.log(`✓ Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

async function processImage(inputPath, relativePath) {
  const fileName = path.basename(inputPath, path.extname(inputPath));
  const outputBasePath = path.join(OUTPUT_DIR, relativePath);
  
  await ensureDirectoryExists(outputBasePath);
  
  // Generate multiple sizes and formats
  const promises = [];
  
  // Generate WebP versions
  for (const [sizeName, size] of Object.entries(SIZES)) {
    const outputPath = path.join(outputBasePath, `${fileName}-${sizeName}.webp`);
    promises.push(optimizeImage(inputPath, outputPath, size, null, 'webp'));
  }
  
  // Generate JPEG fallback for older browsers
  const jpegOutputPath = path.join(outputBasePath, `${fileName}-medium.jpeg`);
  promises.push(optimizeImage(inputPath, jpegOutputPath, SIZES.medium, null, 'jpeg'));
  
  await Promise.all(promises);
}

async function processDirectory(dirPath, relativePath = '') {
  try {
    const items = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item.name);
      const newRelativePath = path.join(relativePath, item.name);
      
      if (item.isDirectory()) {
        await processDirectory(fullPath, newRelativePath);
      } else if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          await processImage(fullPath, relativePath);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

async function generateImageManifest() {
  const manifest = {};
  
  async function scanDirectory(dirPath, relativePath = '') {
    try {
      const items = await fs.readdir(dirPath, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);
        const newRelativePath = path.join(relativePath, item.name);
        
        if (item.isDirectory()) {
          await scanDirectory(fullPath, newRelativePath);
        } else if (item.isFile()) {
          const ext = path.extname(item.name).toLowerCase();
          if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
            const fileName = path.basename(item.name, ext);
            const key = path.join(relativePath, fileName).replace(/\\/g, '/');
            
            if (!manifest[key]) {
              manifest[key] = {};
            }
            
            // Add size information if it's an optimized image
            const sizeMatch = item.name.match(/-(\w+)\.(webp|jpeg|jpg|png)$/);
            if (sizeMatch) {
              const size = sizeMatch[1];
              const format = sizeMatch[2];
              if (!manifest[key][format]) {
                manifest[key][format] = {};
              }
              manifest[key][format][size] = `/optimized-images/${newRelativePath}`;
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dirPath}:`, error.message);
    }
  }
  
  await scanDirectory(OUTPUT_DIR);
  
  const manifestPath = path.join(OUTPUT_DIR, 'manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('✓ Generated image manifest');
}

async function main() {
  console.log('🚀 Starting image optimization...');
  
  // Ensure output directory exists
  await ensureDirectoryExists(OUTPUT_DIR);
  
  // Process all images in assets directory
  await processDirectory(ASSETS_DIR);
  
  // Generate manifest file
  await generateImageManifest();
  
  console.log('✅ Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${OUTPUT_DIR}`);
}

main().catch(console.error); 