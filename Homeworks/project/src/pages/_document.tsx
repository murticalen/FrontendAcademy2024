import { StyleRegistry, createStyleRegistry } from '@kuma-ui/core'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = createStyleRegistry()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => (
            <StyleRegistry registry={registry}>
              <App {...props} />
            </StyleRegistry>
          ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, registry.styles()],
      }
    } finally {
      registry.flush()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
