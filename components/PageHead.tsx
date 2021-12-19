import Head from 'next/head';
import { FC } from 'react';

const appName = 'Christian Penrod';

export interface PageHeadProps {
  title?: string;
  description?: string;
}

export const PageHead: FC<PageHeadProps> = (props) => {
  const title = props.title ? `${appName} - ${props.title}` : appName;
  const page = props.title || 'Home';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={`${page} page of website.`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
