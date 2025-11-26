// hooks/useLazyLoad.js
import { useEffect, useRef, useState } from 'react';

export function useLazyLoad(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { threshold = 0.1, rootMargin = '50px' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}