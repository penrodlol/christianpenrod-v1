import { Layout } from '@components/Layout';
import { MediaContextProvider } from '@components/Media';
import { RegisterCssPaint } from '@components/RegisterCssPaint';
import { Typetura } from '@components/Typetura';
import { logMessage } from '@utils/easteregg';
import dayjs from 'dayjs';
import advancedFormatPlugin from 'dayjs/plugin/advancedFormat';
import utcPlugin from 'dayjs/plugin/utc';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.scss';

dayjs.extend(advancedFormatPlugin);
dayjs.extend(utcPlugin);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => logMessage(), []);

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
