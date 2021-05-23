import Layout from "../components/layout";
import PortfolioCard from "../components/portfolioCard";
import * as Portfolio from "../lib/portfolio";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Grid } from "@material-ui/core";

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<IndexPageProps>
> => {
  const portfolio = await Portfolio.getPortfolio();
  return {
    props: {
      portfolio: portfolio,
    },
  };
};

interface IndexPageProps {
  portfolio: Portfolio.Project[];
}

const IndexPage: React.FC<IndexPageProps> = ({ portfolio }) => {
  // console.log("portfolio", portfolio);
  return (
    <Layout>
      <Grid container spacing={4}>
        {portfolio.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4}>
            <PortfolioCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default IndexPage;
