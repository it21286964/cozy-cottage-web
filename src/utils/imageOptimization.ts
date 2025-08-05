import sharp from 'sharp';

// Image optimization configuration
export const IMAGE_SIZES = {
  thumbnail: 150,
  small: 300,
  medium: 600,
  large: 1200,
  xlarge: 1920,
} as const;

export const IMAGE_FORMATS = {
  webp: 'webp',
  jpeg: 'jpeg',
  png: 'png',
} as const;

// Generate responsive image URLs
export const generateImageUrl = (
  originalPath: string,
  size: keyof typeof IMAGE_SIZES = 'medium',
  format: keyof typeof IMAGE_FORMATS = 'webp'
): string => {
  // For now, return the original path since we're not implementing server-side optimization
  // In a production environment, you would generate optimized images on the server
  return originalPath;
};

// Generate multiple sizes for responsive images
export const generateResponsiveImages = (originalPath: string) => {
  return {
    thumbnail: generateImageUrl(originalPath, 'thumbnail'),
    small: generateImageUrl(originalPath, 'small'),
    medium: generateImageUrl(originalPath, 'medium'),
    large: generateImageUrl(originalPath, 'large'),
    xlarge: generateImageUrl(originalPath, 'xlarge'),
  };
};

// Generate srcset for responsive images
export const generateSrcSet = (originalPath: string): string => {
  const sizes = Object.entries(IMAGE_SIZES);
  return sizes
    .map(([size, width]) => `${generateImageUrl(originalPath, size as keyof typeof IMAGE_SIZES)} ${width}w`)
    .join(', ');
};

// Generate sizes attribute for responsive images
export const generateSizes = (className?: string): string => {
  if (className?.includes('w-full')) {
    return '100vw';
  }
  if (className?.includes('w-1/2')) {
    return '50vw';
  }
  if (className?.includes('w-1/3')) {
    return '33vw';
  }
  if (className?.includes('w-1/4')) {
    return '25vw';
  }
  return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
};

// Preload critical images
export const preloadImage = (src: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Preload multiple images
export const preloadImages = (srcs: string[]): void => {
  srcs.forEach(src => preloadImage(src));
};

// Generate low-quality placeholder for progressive loading
export const generatePlaceholder = async (imagePath: string): Promise<string> => {
  try {
    // In a real implementation, you would generate a tiny, blurred version
    // For now, we'll return a data URL of a 1x1 pixel
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  } catch (error) {
    console.error('Error generating placeholder:', error);
    return '';
  }
};

// Image loading strategies
export const IMAGE_LOADING_STRATEGIES = {
  LAZY: 'lazy',
  EAGER: 'eager',
  PRIORITY: 'priority',
} as const;

// Determine if an image should be loaded with priority
export const shouldLoadWithPriority = (imagePath: string): boolean => {
  // Load hero images and first images in carousels with priority
  const priorityPatterns = [
    'cover-home',
    'hero',
    'main',
    'restaurant-main',
  ];
  
  return priorityPatterns.some(pattern => 
    imagePath.toLowerCase().includes(pattern)
  );
};

// Optimize image loading for carousels
export const optimizeCarouselImages = (images: string[], currentIndex: number = 0) => {
  return images.map((image, index) => ({
    src: image,
    priority: index === currentIndex || index === currentIndex + 1,
    preload: index <= currentIndex + 2,
  }));
}; 