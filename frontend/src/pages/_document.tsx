import Document, { Html, Head, Main, NextScript } from 'next/document';

import { APP_CONFIG } from '../utils/app-config';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={APP_CONFIG.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
