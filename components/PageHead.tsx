import Head from 'next/head';
import { FC } from 'react';

const appName = 'Christian Penrod';

export interface PageHeadProps {
  page?: string;
  description?: string;
}

export const PageHead: FC<PageHeadProps> = (props) => {
  const title = props.page ? `${appName} - ${props.page}` : appName;
  const page = props.page || 'Home';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={`${page} page of website.`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
