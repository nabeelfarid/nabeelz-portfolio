import "../styles/globals.css";

import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomMuiTheme from "../styles/theme";
import siteMetadata from "../lib/siteMetaData";

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        {/* https://material-ui.com/getting-started/usage/#responsive-meta-tag */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* https://material-ui.com/getting-started/installation/#roboto-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
        />
        <title>{siteMetadata.title}</title>
      </Head>
      <ThemeProvider theme={CustomMuiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. https://material-ui.com/getting-started/usage/#cssbaseline*/}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
