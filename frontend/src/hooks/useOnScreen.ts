import { useState, useEffect, RefObject, useCallback } from "react";

const useOnScreen = (ref: RefObject<HTMLElement>, options: IntersectionObserverInit = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleObserver = useCallback(([entry]: IntersectionObserverEntry[]) => {
    setIsVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { rootMargin: '100px', threshold: 0.1, ...options });
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [ref, handleObserver, options]);

  return isVisible;
};

export default useOnScreen;
