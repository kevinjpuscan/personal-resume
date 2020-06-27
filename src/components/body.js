import React from "react";
import styled from "styled-components";
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
    </BodyStyled>
  );
}

export default Body;
