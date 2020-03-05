/* tslint:disable */
import Document, { Html, Head, Main, NextScript } from 'next/document';
/* tslint:enable */
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <style jsx global>{`
          html {
            font-size: 62.5%;
          } /* =10px  will affect all rem units*/
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Gilroy;
          }
          main {
            font-size: 1.6rem; /* =16px default font size*/
          }
        `}</style>
        <link rel="stylesheet" href="/Gilroy/stylesheet.css" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// tslint:disable-next-line: no-default-export
export default MyDocument;
