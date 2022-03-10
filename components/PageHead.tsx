import { FAVICON } from '@const/favicon';
import Head from 'next/head';
import { FC } from 'react';

export interface PageHeadProps {
  page?: string;
}

export const PageHead: FC<PageHeadProps> = ({ page }) => {
  const titlePrefix = page ? `${page} | ` : '';
  const title = `${titlePrefix}Christian Penrod`;
  const description = `${page || 'Home'} page of christianpenrod.com.`;

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@penrodlol" />
      <meta name="twitter:creator" content="@penrodlol" />
      <meta name="twitter:image" content="/img/ideas.webp" />

      <link href={FAVICON} rel="icon" type="image/x-icon" />
    </Head>
  );
};
