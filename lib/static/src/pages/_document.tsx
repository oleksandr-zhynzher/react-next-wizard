import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='description' content='Default description for all pages.' />
      </Head>{' '}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
