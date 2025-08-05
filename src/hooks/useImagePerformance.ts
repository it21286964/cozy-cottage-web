import { useState, useEffect, useCallback } from 'react';

interface ImagePerformanceMetrics {
  loadTime: number;
  fileSize: number;
  format: string;
  isOptimized: boolean;
  viewportSize: string;
}

interface ImagePerformanceData {
  [imagePath: string]: ImagePerformanceMetrics;
}

const useImagePerformance = () => {
  const [performanceData, setPerformanceData] = useState<ImagePerformanceData>({});
  const [totalSavings, setTotalSavings] = useState(0);
  const [averageLoadTime, setAverageLoadTime] = useState(0);

  const trackImageLoad = useCallback((
    imagePath: string,
    startTime: number,
    endTime: number,
    fileSize: number,
    format: string,
    isOptimized: boolean,
    viewportWidth: number
  ) => {
    const loadTime = endTime - startTime;
    const viewportSize = viewportWidth <= 768 ? 'mobile' : 
                        viewportWidth <= 1200 ? 'tablet' : 'desktop';

    const metrics: ImagePerformanceMetrics = {
      loadTime,
      fileSize,
      format,
      isOptimized,
      viewportSize,
    };

    setPerformanceData(prev => ({
      ...prev,
      [imagePath]: metrics,
    }));
  }, []);

  const getImageLoadStartTime = useCallback(() => {
    return performance.now();
  }, []);

  const calculateSavings = useCallback(() => {
    const originalSizes = {
      'cover-home.jpg': 4.6 * 1024 * 1024, // 4.6MB
      'restaurant-main.jpg': 684 * 1024, // 684KB
      'cozy logo.png': 164 * 1024, // 164KB
      'cozy-logo-processed.png': 95 * 1024, // 95KB
    };

    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;

    Object.entries(performanceData).forEach(([path, metrics]) => {
      const originalSize = originalSizes[path] || metrics.fileSize * 2; // Estimate if not found
      totalOriginalSize += originalSize;
      totalOptimizedSize += metrics.fileSize;
    });

    const savings = totalOriginalSize - totalOptimizedSize;
    const savingsPercentage = (savings / totalOriginalSize) * 100;

    return {
      totalOriginalSize,
      totalOptimizedSize,
      savings,
      savingsPercentage,
    };
  }, [performanceData]);

  const getPerformanceStats = useCallback(() => {
    const loadTimes = Object.values(performanceData).map(m => m.loadTime);
    const avgLoadTime = loadTimes.length > 0 ? 
      loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length : 0;

    const optimizedCount = Object.values(performanceData).filter(m => m.isOptimized).length;
    const totalCount = Object.keys(performanceData).length;

    const formatBreakdown = Object.values(performanceData).reduce((acc, metrics) => {
      acc[metrics.format] = (acc[metrics.format] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalImages: totalCount,
      optimizedImages: optimizedCount,
      optimizationRate: totalCount > 0 ? (optimizedCount / totalCount) * 100 : 0,
      averageLoadTime: avgLoadTime,
      formatBreakdown,
      savings: calculateSavings(),
    };
  }, [performanceData, calculateSavings]);

  useEffect(() => {
    const stats = getPerformanceStats();
    setAverageLoadTime(stats.averageLoadTime);
    setTotalSavings(stats.savings.savings);
  }, [performanceData, getPerformanceStats]);

  const logPerformanceReport = useCallback(() => {
    const stats = getPerformanceStats();
    console.group('📊 Image Performance Report');
    console.log(`Total Images: ${stats.totalImages}`);
    console.log(`Optimized Images: ${stats.optimizedImages} (${stats.optimizationRate.toFixed(1)}%)`);
    console.log(`Average Load Time: ${stats.averageLoadTime.toFixed(2)}ms`);
    console.log(`Format Breakdown:`, stats.formatBreakdown);
    console.log(`Bandwidth Savings: ${(stats.savings.savings / 1024 / 1024).toFixed(2)}MB (${stats.savings.savingsPercentage.toFixed(1)}%)`);
    console.groupEnd();
  }, [getPerformanceStats]);

  return {
    trackImageLoad,
    getImageLoadStartTime,
    performanceData,
    totalSavings,
    averageLoadTime,
    getPerformanceStats,
    logPerformanceReport,
  };
};

export default useImagePerformance; 