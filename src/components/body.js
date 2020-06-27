import React from "react";
import styled from "styled-components";
import Section from "./section";
import Projects from "./Projects";
import Works from "./Works";
import StackTech from "./stackTech";

export const BodyStyled = styled.div``;

function Body() {
  return (
    <BodyStyled>
      <Works />
      <StackTech />
      <Projects />
      <Section title="Certified" isWhite={true}></Section>
    </BodyStyled>
  );
}

export default Body;
