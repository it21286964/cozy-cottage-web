import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processLogo() {
  try {
    const inputPath = path.join(__dirname, 'src/assets/cozy logo.png');
    const outputPath = path.join(__dirname, 'src/assets/cozy-logo-processed.png');
    
    // Process the logo with increased contrast and brightness
    await sharp(inputPath)
      // Increase contrast and brightness
      .modulate({
        brightness: 1.2,
        contrast: 1.5,
        saturation: 1.1
      })
      // Apply gamma correction for better visibility
      .gamma(1.2)
      .png()
      .toFile(outputPath);
    
    console.log('Logo processed successfully!');
    console.log('Output file:', outputPath);
  } catch (error) {
    console.error('Error processing logo:', error);
  }
}

processLogo(); 