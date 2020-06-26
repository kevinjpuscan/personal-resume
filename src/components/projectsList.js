import React from "react";
import styled from "styled-components";
import Card from "./card";
import images from "../images/projects";

const projects = [
  {
    title: "Markers in Map",
    owner: "Owner",
    description:
      'Project with ReactJs and leaflet for manage markers in map, challenge of youtube chanel "Hola Mundo"',
    image: images.markersmap,
    github: "https://github.com/kevinjpuscan/react-markers-app",
    website: "https://kevinjpuscan.github.io/react-markers-app/"
  },
  {
    title: "Job listings with filtering",
    owner: "Owner",
    description:
      "Project of job listing, with ReactJs, styled-compoments, challenge from FrontendMentor",
    image: images.joblist,
    github: "https://github.com/kevinjpuscan/react-job-listings",
    website: "https://kevinjpuscan.github.io/react-job-listings/"
  },
  {
    title: "Shortly URL shortening",
    owner: "Owner",
    description:
      "Project of URL shortening, getting url short from API, with ReactJs, styled-compoments, challenge from FrontendMentor",
    image: images.reactshortly,
    github: "https://github.com/kevinjpuscan/react-shortly",
    website: "https://kevinjpuscan.github.io/react-shortly/"
  },
  {
    title: "SPA Covid 19",
    owner: "Owner",
    description:
      "Project of Single Page Application with ReactJs, getting data of covid19 from API",
    image: images.covid,
    github: "https://github.com/kevinjpuscan/spa-covid19-reactjs",
    website: "https://spa-covid19-reactjs.now.sh/"
  },
  {
    title: "Simple Gauge",
    owner: "Owner",
    description: "Project of Simple Gauge rounded in ReactJs, published in npm",
    image: images.gauge,
    github: "https://github.com/kevinjpuscan/react-simple-gauge",
    website: "https://www.npmjs.com/package/react-simple-gauges"
  },
  {
    title: "Simple Gauge",
    owner: "Contributor",
    description:
      "Contribution to the video call project with webrtc and reactjs by Diego Gurgel.",
    image: images.webrtc,
    github: "https://github.com/kevinjpuscan/react-webrtc",
    website: "https://video-chat.dgurgel.now.sh/"
  }
];

export const ProjectsListStyled = styled.div`
  width: 100%;
  display: grid;
  gap: 2em;
  margin: 2em 0;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3em;
  }
`;

function ProjectsList() {
  return (
    <ProjectsListStyled>
      {projects.map((project, idx) => (
        <Card key={idx} project={project} />
      ))}
    </ProjectsListStyled>
  );
}

export default ProjectsList;
