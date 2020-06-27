import React, { Fragment } from "react";
import styled from "styled-components";
import images from "../images/projects";
import Section from "./section";
import CardList from "./cardList";

const projects = [
  {
    title: "Markers in Map",
    owner: "Owner",
    description:
      'Project with ReactJs and leaflet for manage markers in map, challenge of youtube chanel "Hola Mundo"',
    image: images.markersmap,
    github: "https://github.com/kevinjpuscan/react-markers-app",
    website: "https://kevinjpuscan.github.io/react-markers-app/",
    imageSize: false
  },
  {
    title: "Job listings with filtering",
    owner: "Owner",
    description:
      "Project of job listing, with ReactJs, styled-compoments, challenge from FrontendMentor",
    image: images.joblist,
    github: "https://github.com/kevinjpuscan/react-job-listings",
    website: "https://kevinjpuscan.github.io/react-job-listings/",
    imageSize: false
  },
  {
    title: "Shortly URL shortening",
    owner: "Owner",
    description:
      "Project of URL shortening, getting url short from API, with ReactJs, styled-compoments, challenge from FrontendMentor",
    image: images.reactshortly,
    github: "https://github.com/kevinjpuscan/react-shortly",
    website: "https://kevinjpuscan.github.io/react-shortly/",
    imageSize: false
  },
  {
    title: "SPA Covid 19",
    owner: "Owner",
    description:
      "Project of Single Page Application with ReactJs, getting data of covid19 from API",
    image: images.covid,
    github: "https://github.com/kevinjpuscan/spa-covid19-reactjs",
    website: "https://spa-covid19-reactjs.now.sh/",
    imageSize: false
  },
  {
    title: "Simple Gauge",
    owner: "Owner",
    description: "Project of Simple Gauge rounded in ReactJs, published in npm",
    image: images.gauge,
    github: "https://github.com/kevinjpuscan/react-simple-gauge",
    website: "https://www.npmjs.com/package/react-simple-gauges",
    imageSize: "50%"
  },
  {
    title: "Simple Gauge",
    owner: "Contributor",
    description:
      "Contribution to the video call project with webrtc and reactjs by Diego Gurgel.",
    image: images.webrtc,
    github: "https://github.com/kevinjpuscan/react-webrtc",
    website: "https://video-chat.dgurgel.now.sh/",
    imageSize: false
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

function Projects() {
  return (
    <Fragment>
      <Section title="Projects">
        <CardList list={projects} />
      </Section>
    </Fragment>
  );
}

export default Projects;
