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
    background-color: rgba(0, 0, 0, 0.75);
    box-sizing: border-box;
    padding: 2em 0;
  }

  .nav {
    color: white;
    font-weight: 900;
    font-size: 2em;
    a {
      color: white;
      text-decoration: none;
    }
  }

  .description-main {
    color: white;
    margin-top: 20em;
    h1 {
      margin: 0;
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
              My name is Kevin Puscán Ortiz, i am sofware enginer. I have
              approximately three years of experience in  mining technology, I
              am passionate about learning  new things constantly.
            </p>
            <SocialLinks />
          </div>
        </Wrapper>
      </div>
    </MainStyled>
  );
}

export default Main;
