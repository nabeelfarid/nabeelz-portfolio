import fs from "fs";
import path from "path";

export interface Project {
  id: string;
  code: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string;
  repo: string;
  url: string;
  article: string;
  todos: string;
}
const portfolioDirectory = path.join(process.cwd(), "datasource");

export const getPortfolio = async (): Promise<Project[]> => {
  const fullPath = path.join(portfolioDirectory, "portfolio.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { portfolio } = JSON.parse(fileContents);

  // Sort posts by date
  // return portfolio.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  // console.log(portfolio);
  return portfolio;
};
