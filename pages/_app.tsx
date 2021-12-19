import { Footer } from '@components/Footer';
import { Header } from '@components/Header/Header';
import { ThemeProvider } from '@components/Theme/ThemeProvider';
import { Typetura } from '@components/Typetura';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

gsap.registerPlugin(MorphSVGPlugin);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Typetura />
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
