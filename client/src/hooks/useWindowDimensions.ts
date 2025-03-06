import { useState, useEffect, useCallback } from 'react';

// Get window size hook
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
export default function useWindowDimensions() {
  const getWindowDimensions = useCallback(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    return {
      screenWidth,
      screenHeight
    };
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getWindowDimensions]);

  return windowDimensions;
}
