import React, { Fragment } from "react";
import Section from "./section";
import images from "../images/jobs";
import CardList from "./cardList";

const jobs = [
  {
    title: "Remote Support Engineer",
    owner: "Hexagon Mining (Set 2020 - Present)",
    description:
      "Provide operational support to the mining fleet management system and anti-fatigue system.",
    image: images.hexagon,
    github: null,
    website: "https://hexagonmining.com/",
    imageSize: "80%"
  },
  {
    title: "Application Analyst",
    owner: "Mine Sense for Miners (Set 2018 - Set 2020)",
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
    description: "Develop systems modules in mining technology.",
    image: images.ms4m,
    github: null,
    website: "https://www.ms4m.com",
    imageSize: "50%"
  },
  {
    title: "Web Developer",
    owner: "Okidoki (Mar 2017 - Nov 2017)",
    description: "Web developer of a marketplace for okidoki",
    image: images.okidoki,
    github: null,
    website: "https://www.okidoki.pe",
    imageSize: "30%"
  }
];

function Works() {
  return (
    <Fragment>
      <Section title="Experience">
        <CardList list={jobs} />
      </Section>
    </Fragment>
  );
}

export default Works;
