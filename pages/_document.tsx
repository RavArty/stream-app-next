import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        //  Render the app and get the context of the page with collected side effects
        const sheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () => originalRenderPage({ enhanceApp: (App) => (props) => sheets.collect(<App {...props} />) })

        const initalProps = await Document.getInitialProps(ctx)
        return {
            ...initalProps,
            styles: [
                ...React.Children.toArray(initalProps.styles),
                sheets.getStyleElement()
            ]
        }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
