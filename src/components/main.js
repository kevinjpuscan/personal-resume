import React from "react";
import styled from "styled-components";
import profile from "../images/kevin.jpg";
import Wrapper from "./wrapper";
import SocialLinks from "./socialLinks";

export const MainStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${profile});
  background-size: cover;

  .cover {
    width: 100%;
    height: 100vh;

    background: linear-gradient(to right, black, rgba(0, 0, 0, 0)),
      rgba(0, 0, 0, 0.65);

    box-sizing: border-box;
    padding: 2em 0;
  }

  .nav {
    position: absolute;
    top: 1em;
    color: white;
    font-weight: 900;
    font-size: 2em;
    a {
      color: white;
      text-decoration: none;
    }
  }

  .description-main {
    position: absolute;
    bottom: 2em;
    color: white;
    h1 {
      font-size:4.5rem;
      margin: 0;
    }
  }

  @media (min-width: 1200px) {
    background-size: 55%;
    background-repeat: no-repeat;
    background-position-x: 40em;

    .description-main {
      width: 30%;
      bottom: 5em;
      h1 {
        font-size: 5rem;
        margin: 0;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 899px) {
    background-repeat: no-repeat;
    background-position-x: 10em;

    .description-main {
      width: 70%;
      bottom: 5em;
      h1 {
        font-size: 5rem;
        margin: 0;
      }
    }
  }

  @media (min-width: 900px) and (max-width: 1199px) {
    background-size: 75%;
    background-repeat: no-repeat;
    background-position-x: 20em;

    .description-main {
      width: 50%;
      bottom: 5em;
      h1 {
        font-size: 3.5rem;
        margin: 0;
      }
    }
  }
`;

function Main() {
  return (
    <MainStyled>
      <div className="cover">
        <div className="nav">
          <Wrapper>
            <a href="/">KP</a>
          </Wrapper>
        </div>
        <Wrapper>
          <div className="description-main">
            <h1>I am Kevin</h1>
            <p>
              My name is Kevin Puscán Ortiz. I am sofware enginner. I have
              approximately three years of experience in mining technology, I am
              passionate about learning new things constantly.
            </p>
            <SocialLinks />
          </div>
        </Wrapper>
      </div>
    </MainStyled>
  );
}

export default Main;
