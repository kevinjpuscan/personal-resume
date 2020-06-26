import React from "react";
import styled, { css } from "styled-components";

export const SocialLinksStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${props =>
    props.center
      ? css`
          padding: 0 2.5em;
        `
      : css`
          width: 30%;
        `}

  a {
    color: white;
    font-size: 1.5em;
  }
`;

function SocialLinks({ center }) {
  return (
    <SocialLinksStyled center={center}>
      <a href="https://github.com/kevinjpuscan">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://github.com/kevinjpuscan">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/kevinjpuscan">
        <i class="fab fa-twitter-square"></i>
      </a>
    </SocialLinksStyled>
  );
}

export default SocialLinks;
