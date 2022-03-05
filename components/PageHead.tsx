import Head from 'next/head';
import { useRouter } from 'next/router';

export const PageHead = () => {
  const { asPath, route } = useRouter();

  const page =
    route === '/404' &&
    asPath
      .split('/')[1]
      .toLowerCase()
      .replace(/(^|\s)\S/g, (char) => char.toUpperCase());
  const title = page ? `Christian Penrod - ${page}` : 'Christian Penrod';
  const description = `${page || 'Home'} page of christianpenrod.com.`;

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <link
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgBjZM9TsNAEIVnbEdQ+gjOBRCcAFPSkCs4DS1KyZ/YCCKoiKiQSOFwAn4aSo4QIg6QlSLRGAkFl5a9Wcux4yQzTp5keeWZffu+HRmBUbf37QIkLllUKFvHO32qhKTZ48AByxjopQ2crKTeau7J5c8G3Wz6VWaI2KfMSMP7p+GJZnKBdQOpzLjNl0vaCFUlzcmPfIWt7YUecXooVxOaxiesQQ2CMUSW+RfF0aj8XFy/ibTHKtL1hlf65QDPIsNw8oygfGaWszYoUEdQJY36G4z3QYFHHdY5P6qnywzZQr/KK0clzbRio3aQrzNkVA86quQMw/CfRUWl2nezgWRhGQnxYuvL9/QGWyE0dOvuqtscdTEhoahmdlNEhfwAyqi5yD/lrPPucfdVhFtCrTRcL/V1c9kQ5EHcFnH74bA1IlmuKekYf1gAdmyzAAAAAElFTkSuQmCC"
        rel="icon"
        type="image/x-icon"
      />
    </Head>
  );
};
