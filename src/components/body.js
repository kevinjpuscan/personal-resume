import React from "react";
import styled from "styled-components";
import Section from "./section";
import ProjectsList from "./projectsList";

export const BodyStyled = styled.div``;

function Body() {
  return (
    <BodyStyled>
      <Section title="Work"></Section>
      <Section title="Tech" isWhite={true}></Section>
      <Section title="Projects">
        <ProjectsList />
      </Section>
      <Section title="Certified" isWhite={true}></Section>
    </BodyStyled>
  );
}

export default Body;
