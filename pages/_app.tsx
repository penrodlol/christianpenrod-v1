import { Footer } from '@components/Footer';
import { Header } from '@components/Header/Header';
import { ThemeProvider } from '@components/Theme/ThemeProvider';
import { Typetura } from '@components/Typetura';
import dayjs from 'dayjs';
import advancedFormatPlugin from 'dayjs/plugin/advancedFormat';
import utcPlugin from 'dayjs/plugin/utc';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

gsap.registerPlugin(MorphSVGPlugin);

dayjs.extend(advancedFormatPlugin);
dayjs.extend(utcPlugin);

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
