import { MOTION } from '@const/motion';
import { useEffect, useState } from 'react';

const isRenderingOnServer = typeof window === 'undefined';

const initial = () =>
  isRenderingOnServer ? true : !window.matchMedia(MOTION.NO_PREFERENCE).matches;

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(initial);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia(MOTION.NO_PREFERENCE).matches);
  }, []);

  return prefersReducedMotion;
}
