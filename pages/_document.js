import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
          <meta
            name='google-site-verification'
            content='google-site-verification=wHa4Br9YDLdYtAzkSiEJzNTQhZDtzs_igC_-P5hAVoM'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
