import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=optional" />
                    {/* <link href="/assets/Custom.css" rel="stylesheet" type="text/css" />
                    <link href="/assets/Plugins.css" rel="stylesheet" type="text/css" />
                    <link href="/assets/Prismjs.css" rel="stylesheet" type="text/css" />
                    <link href="/assets/Styles.css" rel="stylesheet" type="text/css" /> */}
                    <link rel="shortcut icon" href="/assets/media/logos/logo_primary_letter.png" />
                </Head>
                <body id="kt_body" className="header-fixed header-mobile-fixed subheader-enabled page-loading">
                   
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument