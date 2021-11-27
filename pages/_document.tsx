import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { evalDarkModeHTML } from 'utils/eval-dark-mode';

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: evalDarkModeHTML }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
