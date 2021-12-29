import { Footer } from '@components/Footer';
import { Header } from '@components/Header/Header';
import { MediaContextProvider } from '@components/MediaQuery';
import { ThemeProvider } from '@components/Theme/ThemeProvider';
import { Typetura } from '@components/Typetura';
import dayjs from 'dayjs';
import advancedFormatPlugin from 'dayjs/plugin/advancedFormat';
import utcPlugin from 'dayjs/plugin/utc';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

gsap.registerPlugin(MorphSVGPlugin, ScrollToPlugin, ScrollTrigger);

dayjs.extend(advancedFormatPlugin);
dayjs.extend(utcPlugin);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Typetura />
      <ThemeProvider>
        <MediaContextProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </MediaContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
