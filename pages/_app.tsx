import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

gsap.registerPlugin(MorphSVGPlugin);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
