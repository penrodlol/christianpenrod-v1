import Head from 'next/head';
import { FC } from 'react';

export interface AppHeadProps {
  title: string;
  description: string;
  favicon?: string;
}

export const AppHead: FC<AppHeadProps> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href={props.favicon || '/favicon.ico'} />
    </Head>
  );
};
