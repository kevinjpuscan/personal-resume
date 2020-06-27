import React, { Fragment } from "react";
import Section from "./section";
import images from "../images/jobs";
import CardList from "./cardList";

const jobs = [
  {
    title: "Application Analyst",
    owner: "Mine Sense for Miners (Set 2018 - Actually)",
    description:
      "Provide operational support to the mining fleet management system at MinaJusta - Marcobre.",
    image: images.ms4m,
    github: null,
    website: "https://www.ms4m.com",
    imageSize: "50%"
  },
  {
    title: "Developer Jr.",
    owner: "Mine Sense for Miners (Nov 2017 - Set 2018)",
    description: "Desarrollar modules de sistemas en tecnología minera.",
    image: images.ms4m,
    github: null,
    website: "https://www.ms4m.com",
    imageSize: "50%"
  },
  {
    title: "Web Developer",
    owner: "Okidoki (Mar 2017 - Nov 2017)",
    description: "Desarrollador web de un marketplace para okidoki",
    image: images.okidoki,
    github: null,
    website: "https://www.okidoki.pe",
    imageSize: "30%"
  }
];

function Works() {
  return (
    <Fragment>
      <Section title="Work">
        <CardList list={jobs} />
      </Section>
    </Fragment>
  );
}

export default Works;
