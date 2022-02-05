import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { MediaContextProvider } from '@components/Media';
import { RegisterCssPaint } from '@components/RegisterCssPaint';
import { Typetura } from '@components/Typetura';
import dayjs from 'dayjs';
import advancedFormatPlugin from 'dayjs/plugin/advancedFormat';
import utcPlugin from 'dayjs/plugin/utc';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

dayjs.extend(advancedFormatPlugin);
dayjs.extend(utcPlugin);

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Typetura />
      <RegisterCssPaint />
      <MediaContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MediaContextProvider>
    </>
  );
}

export default MyApp;
