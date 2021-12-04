import Script from 'next/script';

export const Typetura = () => (
  <Script
    id="typetura-script"
    src="/scripts/typetura.min.js"
    strategy="beforeInteractive"
  />
);
