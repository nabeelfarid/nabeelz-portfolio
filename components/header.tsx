import React from "react";
import Link from "next/link";
import {
  Typography,
  Box,
  useTheme,
  Grid,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import GithubCorner from "react-github-corner";

interface HeaderProps {
  siteMetadata: {
    title?: string;
    subtitle?: string;
    repo?: string;
  };
  pathname?: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  const theme = useTheme();
  return (
    <header>
      <AppBar position="static" color="primary" component="div">
        <Toolbar>
          <GithubCorner
            href={props.siteMetadata.repo}
            bannerColor={theme.palette.secondary.dark}
            size={64}
            target="_blank"
            rel="noopener"
          />
          <Typography variant="h4">
            <Link href="/">
              <a>{props.siteMetadata.title}</a>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box mx="auto" textAlign="center" my={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" color="secondary">
              {props.siteMetadata.subtitle}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </header>
  );
};

export default Header;
