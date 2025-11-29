import { useEffect } from 'react';

// Observes elements with class 'animate-on-view' and adds 'in-view' when they scroll into view.
// Elements animate only once on first load; no re-animation on subsequent scrolls.
export default function AnimateOnLoad({ runRef } = {}) {
  useEffect(() => {
    try {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;
    } catch (err) {
      console.error('AnimateOnLoad early guard error:', err);
      return;
    }

    // Configuration: adjust these values to tweak when and how the reveal runs
    const THRESHOLD = 0.18; // how much of the element should be visible before triggering
    const ROOT_MARGIN = '0px 0px -8% 0px'; // trigger slightly before element fully enters
    const STAGGER_DELAY = 80; // stagger delay between elements (ms)

    let els = [];
    try {
      els = Array.from(document.querySelectorAll('.animate-on-view'));
    } catch (err) {
      console.error('AnimateOnLoad query error:', err);
      return;
    }
    if (!els.length) return;

    if (typeof IntersectionObserver === 'undefined') {
      // If IO is not supported, reveal immediately
      els.forEach(el => el.classList.add('in-view'));
      return;
    }

    // Create index map to stagger card animations
    const indexMap = new Map();
    els.forEach((el, idx) => indexMap.set(el, idx));

    // Track which elements have been animated to prevent re-animation
    const animated = new Set();

    // IntersectionObserver: add 'in-view' class when element enters viewport (once only)
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated.has(entry.target)) {
          animated.add(entry.target);
          const idx = indexMap.get(entry.target) || 0;
          const delay = idx * STAGGER_DELAY;
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, delay);
        }
      });
    }, { threshold: THRESHOLD, rootMargin: ROOT_MARGIN });

    els.forEach(el => io.observe(el));

    return () => io.disconnect();
  }, [runRef]);

  return null;
}
