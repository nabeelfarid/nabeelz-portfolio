import {
  Card,
  Avatar,
  CardHeader,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import {
  GitHub,
  Description,
  Language,
  ExpandMore,
  Info,
  WbIncandescent,
  Star,
} from "@material-ui/icons";
import { Project } from "../lib/portfolio";

interface PortfolioCardProps {
  project: Project;
}
const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      // style={{
      //   height: "100%",
      //   display: "flex",
      //   flexDirection: "column",
      // }}
    >
      <CardHeader
        avatar={
          <Avatar
            style={{
              backgroundColor: theme.palette.primary.main,
              whiteSpace: "nowrap",
              fontSize: theme.spacing(1.75),
            }}
          >
            {project.code}
          </Avatar>
        }
        title={project.title}
        // subheader={project.code}
      />
      <CardActionArea href={project.repo} target="_blank" rel="noopener">
        <CardMedia
          style={{ width: "100%", paddingTop: "56.25%" }} //16:9
          image={`/images/${project.image}`}
          title={project.title}
        />
      </CardActionArea>
      <CardContent style={{ padding: 0 }}>
        {/* <Typography component="p" align="justify">
            {project.description}
          </Typography> */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Description />
            <Typography style={{ marginLeft: theme.spacing(1) }}>
              Summary
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{project.description}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Star />
            <Typography style={{ marginLeft: theme.spacing(1) }}>
              Tech Stack
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{project.techStack}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Info />
            <Typography style={{ marginLeft: theme.spacing(1) }}>
              TODOs
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{project.todos}</Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
      {/* <Box flexGrow={1}></Box> */}
      {/* <Divider /> */}
      <CardActions style={{ justifyContent: "center" }}>
        <IconButton
          color="primary"
          aria-label="repo"
          title="repo"
          href={project.repo}
          target="_blank"
          rel="noopener"
        >
          <GitHub />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="demo"
          title="demo"
          href={project.url}
          target="_blank"
          rel="noopener"
        >
          <Language />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="inspiration"
          title="inspiration"
          href={project.article}
          target="_blank"
          rel="noopener"
        >
          <WbIncandescent style={{ transform: "rotate(180deg)" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PortfolioCard;
