import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentId = '';
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the top of the viewport
          if (rect.top <= offset && rect.bottom >= offset) {
            currentId = id;
            break;
          }
        }
      }
      
      if (currentId !== activeId) {
        setActiveId(currentId);
      }
      
      // Handle bottom of page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
         if (sectionIds.length > 0) {
            setActiveId(sectionIds[sectionIds.length - 1]);
         }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset, activeId]);

  return activeId;
}
