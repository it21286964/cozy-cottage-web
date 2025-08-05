import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  getBestOptimizedImage, 
  generateOptimizedSrcSet, 
  generateOptimizedPlaceholder,
  generatePictureSources 
} from '@/utils/optimizedImageLoader';
import { shouldLoadWithPriority, generateSizes } from '@/utils/imageOptimization';

interface AdvancedOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  usePicture?: boolean;
  lazy?: boolean;
}

const AdvancedOptimizedImage: React.FC<AdvancedOptimizedImageProps> = ({
  src,
  alt,
  className,
  sizes: customSizes,
  priority = false,
  placeholder,
  onLoad,
  onError,
  usePicture = true,
  lazy = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [srcset, setSrcset] = useState('');
  const [pictureSources, setPictureSources] = useState<any[]>([]);
  const [placeholderSrc, setPlaceholderSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Determine if this image should be loaded with priority
  const shouldPriority = priority || shouldLoadWithPriority(src);

  useEffect(() => {
    // Load optimized images
    const loadOptimizedImages = async () => {
      try {
        // Get the best optimized image for current viewport
        const bestImage = await getBestOptimizedImage(src);
        setOptimizedSrc(bestImage);

        // Generate srcset for responsive loading
        const generatedSrcset = await generateOptimizedSrcSet(src);
        setSrcset(generatedSrcset);

        // Generate picture sources if using picture element
        if (usePicture) {
          const sources = await generatePictureSources(src);
          setPictureSources(sources || []);
        }

        // Generate placeholder
        if (!placeholder) {
          const generatedPlaceholder = await generateOptimizedPlaceholder(src);
          setPlaceholderSrc(generatedPlaceholder);
        }
      } catch (error) {
        console.warn('Failed to load optimized images, using original:', error);
      }
    };

    loadOptimizedImages();
  }, [src, usePicture, placeholder]);

  useEffect(() => {
    if (shouldPriority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    observerRef.current = observer;

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [shouldPriority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  if (isError) {
    return (
      <div className={cn("bg-gray-200 flex items-center justify-center", className)}>
        <div className="text-gray-500 text-sm">Failed to load image</div>
      </div>
    );
  }

  const sizes = customSizes || generateSizes(className);

  // Use picture element for better format support
  if (usePicture && pictureSources.length > 0) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        {/* Blur placeholder */}
        {placeholderSrc && !isLoaded && (
          <div
            className="absolute inset-0 bg-gray-200 animate-pulse"
            style={{
              backgroundImage: `url(${placeholderSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(10px)',
            }}
          />
        )}
        
        {/* Picture element with optimized sources */}
        {isInView && (
          <picture>
            {pictureSources.map((source, index) => (
              <source
                key={index}
                type={source.type}
                srcSet={source.srcset}
                sizes={source.sizes}
              />
            ))}
            <img
              ref={imgRef}
              src={optimizedSrc}
              alt={alt}
              className={cn(
                "transition-opacity duration-300",
                isLoaded ? "opacity-100" : "opacity-0",
                className
              )}
              sizes={sizes}
              loading={shouldPriority ? "eager" : lazy ? "lazy" : "eager"}
              onLoad={handleLoad}
              onError={handleError}
            />
          </picture>
        )}
        
        {/* Loading skeleton */}
        {!isLoaded && !placeholderSrc && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
    );
  }

  // Fallback to regular img element
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Blur placeholder */}
      {placeholderSrc && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundImage: `url(${placeholderSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
          }}
        />
      )}
      
      {/* Main image */}
      {isInView && (
        <img
          ref={imgRef}
          src={optimizedSrc}
          alt={alt}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          srcSet={srcset}
          sizes={sizes}
          loading={shouldPriority ? "eager" : lazy ? "lazy" : "eager"}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && !placeholderSrc && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default AdvancedOptimizedImage; 