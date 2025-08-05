import React from 'react';
import OptimizedImage from './OptimizedImage';
import ResponsiveImage from './ResponsiveImage';
import AdvancedOptimizedImage from './AdvancedOptimizedImage';
import useImagePerformance from '@/hooks/useImagePerformance';

const ImageOptimizationTest: React.FC = () => {
  const { logPerformanceReport } = useImagePerformance();

  React.useEffect(() => {
    // Log performance report after images load
    const timer = setTimeout(() => {
      logPerformanceReport();
    }, 3000);

    return () => clearTimeout(timer);
  }, [logPerformanceReport]);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Image Optimization Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Test 1: Basic OptimizedImage */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Basic OptimizedImage</h3>
          <OptimizedImage 
            src="/src/assets/cover-home.jpg"
            alt="Cover home test"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Test 2: ResponsiveImage */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">ResponsiveImage</h3>
          <ResponsiveImage 
            src="/src/assets/restaurant-main.jpg"
            alt="Restaurant main test"
            className="w-full h-48 object-cover rounded-lg"
            priority={true}
          />
        </div>

        {/* Test 3: AdvancedOptimizedImage */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">AdvancedOptimizedImage</h3>
          <AdvancedOptimizedImage 
            src="/src/assets/cozy-logo-processed.png"
            alt="Logo test"
            className="w-full h-48 object-cover rounded-lg"
            usePicture={true}
          />
        </div>

        {/* Test 4: Room Images */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Room Image (Optimized)</h3>
          <ResponsiveImage 
            src="/src/assets/superior dbl/IMG_4971.JPG"
            alt="Superior double room"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Test 5: Restaurant Image */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Restaurant Image (Optimized)</h3>
          <ResponsiveImage 
            src="/src/assets/restaurant img/PXL_20240612_085408647.jpg"
            alt="Restaurant dining"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Test 6: Thumbnail Test */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Thumbnail Test</h3>
          <OptimizedImage 
            src="/src/assets/deluxe dbl/IMG_4892.JPG"
            alt="Deluxe room thumbnail"
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Performance Information</h3>
        <p className="text-sm text-gray-600">
          Check the browser console for detailed performance metrics. 
          The optimized images should load significantly faster than the originals.
        </p>
        <div className="mt-4 space-y-2 text-sm">
          <p><strong>Expected Improvements:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Cover image: 4.6MB → ~40KB (WebP)</li>
            <li>Restaurant image: 684KB → ~37KB (WebP)</li>
            <li>Load time reduction: ~75% faster</li>
            <li>Bandwidth savings: ~90%</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Optimization Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold">✅ Implemented:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Lazy loading with Intersection Observer</li>
              <li>Progressive loading with blur placeholders</li>
              <li>WebP format with JPEG fallbacks</li>
              <li>Responsive images with srcset</li>
              <li>Priority loading for critical images</li>
              <li>Performance monitoring and analytics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">🎯 Benefits:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Faster page load times</li>
              <li>Reduced bandwidth usage</li>
              <li>Better user experience</li>
              <li>Improved Core Web Vitals</li>
              <li>Mobile-friendly optimization</li>
              <li>Automatic format selection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOptimizationTest; 