import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";

export const SectionStyled = styled.div`
  padding: 3em 0;
  background-color: ${props =>
    props.isWhite ? "white" : "var(--gray-background)"};

  .title {
    font-size: 1.5em;
  }
`;

function Section({ title, isWhite, children }) {
  return (
    <SectionStyled isWhite={isWhite}>
      <Wrapper>
        <h1 className="title">{title}</h1>
        {children}
      </Wrapper>
    </SectionStyled>
  );
}

export default Section;
