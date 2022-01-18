import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { MediaContextProvider } from '@components/Media';
import { RegisterCssPaint } from '@components/RegisterCssPaint';
import { ScrollbarStyles } from '@components/ScrollbarStyles';
import { Typetura } from '@components/Typetura';
import dayjs from 'dayjs';
import advancedFormatPlugin from 'dayjs/plugin/advancedFormat';
import utcPlugin from 'dayjs/plugin/utc';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../styles/globals.scss';

dayjs.extend(advancedFormatPlugin);
dayjs.extend(utcPlugin);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Typetura />
      <RegisterCssPaint />
      <ScrollbarStyles />
      <MediaContextProvider>
        <RecoilRoot>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </RecoilRoot>
      </MediaContextProvider>
    </>
  );
}

export default MyApp;
