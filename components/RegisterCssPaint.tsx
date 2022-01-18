import Script from 'next/script';
import { useEffect } from 'react';

export const RegisterCssPaint = () => {
  useEffect(() => {
    if ('paintWorklet' in CSS) {
      (CSS as any).paintWorklet.addModule('/scripts/grid-background.js');
    }
  }, []);

  return (
    <Script
      id="css-paint-polyfill-script"
      src="https://unpkg.com/css-paint-polyfill@3.3.0/dist/css-paint-polyfill.js"
      strategy="beforeInteractive"
    />
  );
};
