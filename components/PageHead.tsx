import { titleCase } from '@utils/functions';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const PageHead = () => {
  const { asPath } = useRouter();

  const page = titleCase(asPath.split('/')[1]);
  const title = page ? `Christian Penrod - ${page}` : 'Christian Penrod';
  const description = `${page || 'Home'} page of christianpenrod.com.`;

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
