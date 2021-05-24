import Head from "next/head";
import React from "react";
import {
  Box,
  Container,
  Divider,
  Link as MuiLink,
  Typography,
} from "@material-ui/core";
import Header from "./header";
import siteMetadata from "../lib/siteMetaData";

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        {/* <!-- ****** faviconit.com favicons ****** --> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/favicon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="160x160"
          href="/favicon-160.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16.png"
        />
        <link rel="apple-touch-icon" href="/favicon-57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/favicon-144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {/* <!-- ****** faviconit.com favicons ****** --> */}

        <meta name="description" content="Panacloud Bootcamp 2020 Portfolio" />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta
          property="og:description"
          content="Panacloud Bootcamp 2020 Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/bootcamp.png" />
        {title && (
          <title>
            {title} | {siteMetadata.title}
          </title>
        )}
      </Head>
      <Header siteMetadata={siteMetadata} />
      {/* <Container maxWidth="md"> */}
      <Container>
        <Box>
          <main>{children}</main>
          <footer>
            <Box mt={5} textAlign="center">
              <Divider />
              <Box mt={1}>
                <Typography>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <MuiLink color="primary" href="https://nextjs.org/">
                    Next.js
                  </MuiLink>
                </Typography>
                <Typography>
                  {"Powered by "}
                  <MuiLink color="primary" href="https://material-ui.com/">
                    Material-UI
                  </MuiLink>
                </Typography>
                <Typography>
                  {"Hosted on "}
                  <MuiLink color="primary" href="https://vercel.com//">
                    Vercel
                  </MuiLink>
                  {", Written by "}
                  <MuiLink
                    color="primary"
                    href="https://facebook.com/nomadicnabeel"
                  >
                    {siteMetadata.author}{" "}
                  </MuiLink>
                </Typography>
              </Box>
            </Box>
          </footer>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
