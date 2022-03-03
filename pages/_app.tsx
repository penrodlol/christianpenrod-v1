import { Layout } from '@components/Layout';
import { MediaContextProvider } from '@components/Media';
import { RegisterCssPaint } from '@components/RegisterCssPaint';
import { Typetura } from '@components/Typetura';
import dayjs from 'dayjs';
import advancedFormatPlugin from 'dayjs/plugin/advancedFormat';
import utcPlugin from 'dayjs/plugin/utc';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

dayjs.extend(advancedFormatPlugin);
dayjs.extend(utcPlugin);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Typetura />
      <RegisterCssPaint />
      <MediaContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MediaContextProvider>
    </>
  );
}

export default MyApp;
