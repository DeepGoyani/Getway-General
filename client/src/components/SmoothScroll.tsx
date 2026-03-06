import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'wouter';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [location] = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location, lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
