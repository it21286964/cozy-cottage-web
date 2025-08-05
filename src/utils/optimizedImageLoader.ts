// Image optimization loader that uses the generated optimized images
import { IMAGE_SIZES, IMAGE_FORMATS } from './imageOptimization';

// Load the manifest file to get optimized image paths
let imageManifest: any = null;

const loadImageManifest = async () => {
  if (imageManifest) return imageManifest;
  
  try {
    const response = await fetch('/optimized-images/manifest.json');
    imageManifest = await response.json();
    return imageManifest;
  } catch (error) {
    console.warn('Could not load image manifest, falling back to original images');
    return null;
  }
};

// Extract the base name and directory from an image path
const extractImageInfo = (imagePath: string) => {
  const pathParts = imagePath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const directory = pathParts.slice(0, -1).join('/');
  const baseName = fileName.split('.')[0];
  const extension = fileName.split('.').pop()?.toLowerCase();
  
  return {
    directory,
    baseName,
    extension,
    fullPath: imagePath
  };
};

// Generate optimized image URL for a specific size and format
export const getOptimizedImageUrl = async (
  originalPath: string,
  size: keyof typeof IMAGE_SIZES = 'medium',
  format: keyof typeof IMAGE_FORMATS = 'webp'
): Promise<string> => {
  const manifest = await loadImageManifest();
  if (!manifest) return originalPath;

  const imageInfo = extractImageInfo(originalPath);
  const manifestKey = `${imageInfo.directory}/${imageInfo.baseName}`;
  
  const optimizedPath = manifest[manifestKey]?.[format]?.[size];
  if (optimizedPath) {
    return optimizedPath;
  }
  
  return originalPath;
};

// Generate srcset for responsive images
export const generateOptimizedSrcSet = async (originalPath: string): Promise<string> => {
  const manifest = await loadImageManifest();
  if (!manifest) return '';

  const imageInfo = extractImageInfo(originalPath);
  const manifestKey = `${imageInfo.directory}/${imageInfo.baseName}`;
  
  const srcsetParts: string[] = [];
  
  // Add WebP versions
  for (const [sizeName, width] of Object.entries(IMAGE_SIZES)) {
    const optimizedPath = manifest[manifestKey]?.webp?.[sizeName];
    if (optimizedPath) {
      srcsetParts.push(`${optimizedPath} ${width}w`);
    }
  }
  
  // Add JPEG fallback
  const jpegPath = manifest[manifestKey]?.jpeg?.medium;
  if (jpegPath) {
    srcsetParts.push(`${jpegPath} ${IMAGE_SIZES.medium}w`);
  }
  
  return srcsetParts.join(', ');
};

// Generate picture element sources for different formats
export const generatePictureSources = async (originalPath: string) => {
  const manifest = await loadImageManifest();
  if (!manifest) return null;

  const imageInfo = extractImageInfo(originalPath);
  const manifestKey = `${imageInfo.directory}/${imageInfo.baseName}`;
  
  const sources = [];
  
  // WebP source with srcset
  const webpSrcset = Object.entries(IMAGE_SIZES)
    .map(([sizeName, width]) => {
      const path = manifest[manifestKey]?.webp?.[sizeName];
      return path ? `${path} ${width}w` : null;
    })
    .filter(Boolean)
    .join(', ');
  
  if (webpSrcset) {
    sources.push({
      type: 'image/webp',
      srcset: webpSrcset,
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    });
  }
  
  // JPEG fallback
  const jpegSrcset = Object.entries(IMAGE_SIZES)
    .map(([sizeName, width]) => {
      const path = manifest[manifestKey]?.jpeg?.[sizeName];
      return path ? `${path} ${width}w` : null;
    })
    .filter(Boolean)
    .join(', ');
  
  if (jpegSrcset) {
    sources.push({
      type: 'image/jpeg',
      srcset: jpegSrcset,
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    });
  }
  
  return sources;
};

// Preload optimized images
export const preloadOptimizedImages = async (imagePaths: string[]) => {
  const manifest = await loadImageManifest();
  if (!manifest) return;

  for (const imagePath of imagePaths) {
    const imageInfo = extractImageInfo(imagePath);
    const manifestKey = `${imageInfo.directory}/${imageInfo.baseName}`;
    
    // Preload medium WebP version
    const optimizedPath = manifest[manifestKey]?.webp?.medium;
    if (optimizedPath) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedPath;
      document.head.appendChild(link);
    }
  }
};

// Get the best optimized image for current viewport
export const getBestOptimizedImage = async (
  originalPath: string,
  viewportWidth: number = window.innerWidth
): Promise<string> => {
  const manifest = await loadImageManifest();
  if (!manifest) return originalPath;

  const imageInfo = extractImageInfo(originalPath);
  const manifestKey = `${imageInfo.directory}/${imageInfo.baseName}`;
  
  // Determine the best size based on viewport width
  let bestSize: keyof typeof IMAGE_SIZES = 'medium';
  
  if (viewportWidth <= 768) {
    bestSize = 'small';
  } else if (viewportWidth <= 1200) {
    bestSize = 'medium';
  } else if (viewportWidth <= 1920) {
    bestSize = 'large';
  } else {
    bestSize = 'xlarge';
  }
  
  // Try WebP first, fallback to JPEG
  const webpPath = manifest[manifestKey]?.webp?.[bestSize];
  if (webpPath) return webpPath;
  
  const jpegPath = manifest[manifestKey]?.jpeg?.[bestSize];
  if (jpegPath) return jpegPath;
  
  return originalPath;
};

// Generate low-quality placeholder for progressive loading
export const generateOptimizedPlaceholder = async (originalPath: string): Promise<string> => {
  const manifest = await loadImageManifest();
  if (!manifest) return '';

  const imageInfo = extractImageInfo(originalPath);
  const manifestKey = `${imageInfo.directory}/${imageInfo.baseName}`;
  
  // Use thumbnail as placeholder
  const thumbnailPath = manifest[manifestKey]?.webp?.thumbnail;
  if (thumbnailPath) {
    return thumbnailPath;
  }
  
  return '';
}; 