import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

const URL = process.env.NEXT_PUBLIC_URL;
const TITLE = 'Christian Penrod | Front-End Web Developer';
const DESCRIPTION =
  'Developing for the web since 2015, based in Pittsburgh PA. Home to my porfolio and blog!';

export interface PageHeadProps {
  page?: string;
  title?: string;
  description?: string;
}

export const PageHead: FC<PageHeadProps> = ({ page, title, description }) => {
  const { asPath } = useRouter();
  const pageTitle = `${page ? `${page} | ` : ''}Christian Penrod`;

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="title" content={title || TITLE} />
      <meta name="description" content={description || DESCRIPTION} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@penrodlol" />
      <meta name="twitter:title" content={title || TITLE} />
      <meta name="twitter:description" content={description || DESCRIPTION} />
      <meta name="twitter:image" content={`${URL}/img/ideas_twitter.webp`} />

      <meta name="og:type" content="website" />
      <meta name="og:title" content={title || TITLE} />
      <meta name="og:description" content={description || DESCRIPTION} />
      <meta name="og:image" content={`${URL}/img/ideas_og.webp`} />
      <meta name="og:image:alt" content={`Banner for ${URL}`} />
      <meta name="og:image:width" content="1280" />
      <meta name="og:image:height" content="675" />

      <link
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgBjZM9TsNAEIVnbEdQ+gjOBRCcAFPSkCs4DS1KyZ/YCCKoiKiQSOFwAn4aSo4QIg6QlSLRGAkFl5a9Wcux4yQzTp5keeWZffu+HRmBUbf37QIkLllUKFvHO32qhKTZ48AByxjopQ2crKTeau7J5c8G3Wz6VWaI2KfMSMP7p+GJZnKBdQOpzLjNl0vaCFUlzcmPfIWt7YUecXooVxOaxiesQQ2CMUSW+RfF0aj8XFy/ibTHKtL1hlf65QDPIsNw8oygfGaWszYoUEdQJY36G4z3QYFHHdY5P6qnywzZQr/KK0clzbRio3aQrzNkVA86quQMw/CfRUWl2nezgWRhGQnxYuvL9/QGWyE0dOvuqtscdTEhoahmdlNEhfwAyqi5yD/lrPPucfdVhFtCrTRcL/V1c9kQ5EHcFnH74bA1IlmuKekYf1gAdmyzAAAAAElFTkSuQmCC"
        rel="icon"
        type="image/x-icon"
      />
      <link href={`${URL}${asPath}`} rel="canonical" />
    </Head>
  );
};
