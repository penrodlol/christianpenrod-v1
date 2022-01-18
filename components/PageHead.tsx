import Head from 'next/head';
import { FC } from 'react';

export interface PageHeadProps {
  page?: string;
  description?: string;
}

export const PageHead: FC<PageHeadProps> = (props) => {
  const title = props.page ? `${props.page}` : 'Christian Penrod';
  const page = props.page || 'Home';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={`${page} page of website.`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
