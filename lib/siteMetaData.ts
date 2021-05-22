interface SiteMetaData {
  title: string;
  subtitle: string;
  description: string;
  slogan: string;
  author: string;
  repo: string;
  siteUrl: string;
}

const siteMetadata: SiteMetaData = {
  title: `Boot Camp Portfolio`,
  subtitle: `because we love coding 👨‍💻`,
  slogan: `We love IaC!`,
  description: `A place to learn all the latest around Serverless tech.`,
  author: `Nabeel`,
  repo: "https://github.com/nabeelfarid/panacloud-bootcamp-portfolio",
  siteUrl: process.env.SITE_URL,
};

export default siteMetadata;
