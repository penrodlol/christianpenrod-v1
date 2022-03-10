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
      <meta name="twitter:creator" content="@penrodlol" />
      <meta name="twitter:title" content="Christian Penrod" />
      <meta
        name="twitter:description"
        content="Developing for the web since 2015, based in Pittsburgh PA. A few areas I tend to focus on include developer experience tooling, responsive web design, and occasionally some attempts at teaching."
      />
      <meta
        name="twitter:image"
        content="https://christianpenrod.com/img/ideas_twitter.webp"
      />

      <link href={FAVICON} rel="icon" type="image/x-icon" />
    </Head>
  );
};
