import React from "react";
import styled from "styled-components";
import Section from "./section";
import Card from "./card";

export const BodyStyled = styled.div``;

function Body() {
  return (
    <BodyStyled>
      <Section title="Work"></Section>
      <Section title="Tech" isWhite={true}></Section>
      <Section title="Projects">
        <Card />
      </Section>
      <Section title="Certified" isWhite={true}></Section>
    </BodyStyled>
  );
}

export default Body;
