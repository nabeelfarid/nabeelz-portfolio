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
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteMetadata.title} />
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
                  {", Powered by "}
                  <MuiLink color="primary" href="https://material-ui.com/">
                    Material-UI
                  </MuiLink>
                </Typography>
                <Typography>
                  {/* {", "}
                  <MuiLink
                    color="primary"
                    href="https://www.netlify.com/products/functions/"
                  >
                    Lambda Functions
                  </MuiLink>
                  {", "}
                  <MuiLink color="primary" href="https://graphql.org/">
                    GraphQL
                  </MuiLink>
                  {" and "}
                  <MuiLink color="primary" href="https://fauna.com/">
                    Fauna DB
                  </MuiLink>
                  {"."} */}
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
