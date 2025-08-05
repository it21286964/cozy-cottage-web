# Image Optimization System

This document outlines the comprehensive image optimization system implemented for the Cozy Cottage website.

## 🚀 Overview

The image optimization system provides:
- **Automatic image optimization** with multiple sizes and formats
- **Responsive image loading** with proper srcset and sizes
- **Progressive loading** with blur placeholders
- **Lazy loading** for better performance
- **WebP format** support with JPEG fallbacks
- **Performance monitoring** and analytics

## 📁 File Structure

```
cozy-cottage-web/
├── scripts/
│   └── optimizeImages.js          # Image optimization script
├── src/
│   ├── components/
│   │   ├── OptimizedImage.tsx     # Basic optimized image component
│   │   ├── ResponsiveImage.tsx    # Responsive image component
│   │   └── AdvancedOptimizedImage.tsx # Advanced component with picture element
│   ├── utils/
│   │   ├── imageOptimization.ts   # Image optimization utilities
│   │   └── optimizedImageLoader.ts # Optimized image loader
│   └── hooks/
│       └── useImagePerformance.ts # Performance monitoring hook
├── public/
│   └── optimized-images/          # Generated optimized images
└── IMAGE_OPTIMIZATION.md          # This documentation
```

## 🛠️ Image Optimization Script

### Usage

```bash
npm run optimize-images
```

### What it does:

1. **Scans** all images in `src/assets/`
2. **Generates** multiple sizes:
   - `thumbnail`: 150px
   - `small`: 300px
   - `medium`: 600px
   - `large`: 1200px
   - `xlarge`: 1920px
3. **Converts** to WebP format with JPEG fallbacks
4. **Optimizes** quality settings:
   - WebP: 80% quality
   - JPEG: 85% quality
   - PNG: 90% quality
5. **Creates** a manifest file for easy lookup

### Output

Optimized images are saved to `public/optimized-images/` with the structure:
```
optimized-images/
├── manifest.json
├── cover-home-thumbnail.webp
├── cover-home-small.webp
├── cover-home-medium.webp
├── cover-home-medium.jpeg
├── cover-home-large.webp
└── cover-home-xlarge.webp
```

## 🎯 Image Components

### 1. OptimizedImage
Basic component with lazy loading and intersection observer.

```tsx
import OptimizedImage from '@/components/OptimizedImage';

<OptimizedImage 
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-64"
  priority={false}
/>
```

### 2. ResponsiveImage
Enhanced component with responsive loading and preloading.

```tsx
import ResponsiveImage from '@/components/ResponsiveImage';

<ResponsiveImage 
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-64"
  priority={true}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 3. AdvancedOptimizedImage
Advanced component with picture element and format support.

```tsx
import AdvancedOptimizedImage from '@/components/AdvancedOptimizedImage';

<AdvancedOptimizedImage 
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-64"
  usePicture={true}
  lazy={true}
/>
```

## 📊 Performance Monitoring

### Usage

```tsx
import useImagePerformance from '@/hooks/useImagePerformance';

const { trackImageLoad, getImageLoadStartTime, logPerformanceReport } = useImagePerformance();

// Track image load
const startTime = getImageLoadStartTime();
const handleImageLoad = () => {
  const endTime = performance.now();
  trackImageLoad(imagePath, startTime, endTime, fileSize, format, isOptimized, viewportWidth);
};

// Log performance report
logPerformanceReport();
```

### Metrics Tracked

- **Load Time**: Time from start to complete load
- **File Size**: Optimized vs original file sizes
- **Format**: WebP, JPEG, PNG usage
- **Optimization Rate**: Percentage of optimized images
- **Bandwidth Savings**: Total bytes saved
- **Viewport Size**: Mobile, tablet, desktop

## 🔧 Configuration

### Image Sizes

```typescript
export const IMAGE_SIZES = {
  thumbnail: 150,
  small: 300,
  medium: 600,
  large: 1200,
  xlarge: 1920,
};
```

### Quality Settings

```typescript
const QUALITY = {
  webp: 80,
  jpeg: 85,
  png: 90,
};
```

### Priority Patterns

Images matching these patterns are loaded with priority:
- `cover-home`
- `hero`
- `main`
- `restaurant-main`

## 🎨 Best Practices

### 1. Use Appropriate Components

- **Hero images**: Use `AdvancedOptimizedImage` with `priority={true}`
- **Gallery images**: Use `ResponsiveImage` with lazy loading
- **Thumbnails**: Use `OptimizedImage` for small images

### 2. Set Proper Sizes

```tsx
// Full width image
<ResponsiveImage sizes="100vw" />

// Half width image
<ResponsiveImage sizes="50vw" />

// Grid image
<ResponsiveImage sizes="(max-width: 768px) 100vw, 33vw" />
```

### 3. Optimize for Different Viewports

```tsx
// Mobile-first approach
<ResponsiveImage 
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 4. Use Progressive Loading

```tsx
<AdvancedOptimizedImage 
  placeholder="/path/to/placeholder.jpg"
  usePicture={true}
/>
```

## 📈 Performance Benefits

### Before Optimization
- **Cover image**: 4.6MB
- **Restaurant image**: 684KB
- **Total load time**: ~5-8 seconds

### After Optimization
- **Cover image**: 40KB (WebP) + 64KB (JPEG fallback)
- **Restaurant image**: 37KB (WebP) + 55KB (JPEG fallback)
- **Total load time**: ~1-2 seconds
- **Bandwidth savings**: ~90%

## 🔄 Workflow

### 1. Add New Images
1. Place images in `src/assets/`
2. Run `npm run optimize-images`
3. Use optimized components in your code

### 2. Update Existing Images
1. Replace images in `src/assets/`
2. Run `npm run optimize-images`
3. Clear browser cache to see changes

### 3. Monitor Performance
1. Use `useImagePerformance` hook
2. Check browser dev tools
3. Monitor Core Web Vitals

## 🐛 Troubleshooting

### Images Not Loading
- Check if optimized images exist in `public/optimized-images/`
- Verify manifest.json is generated
- Check browser console for errors

### Poor Performance
- Ensure images are being optimized
- Check if correct sizes are being loaded
- Verify lazy loading is working

### Format Issues
- Check browser WebP support
- Verify JPEG fallbacks are working
- Test on different devices

## 🚀 Future Enhancements

### Planned Features
- **AVIF format** support for even better compression
- **Automatic optimization** on build
- **CDN integration** for global delivery
- **Real-time analytics** dashboard
- **Automatic quality adjustment** based on connection speed

### Advanced Features
- **Art direction** with different crops for different viewports
- **Content-aware cropping** using AI
- **Automatic alt text generation**
- **Image compression** based on user's connection speed

## 📚 Resources

- [WebP Format Guide](https://developers.google.com/speed/webp)
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Picture Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) 