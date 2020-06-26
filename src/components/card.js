import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import image from "../images/react-shortly.jpg";

export const CardStyled = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .image {
    border-radius: 5px 5px 0 0;
    height: 210px;
    background-image: url(${image});
    background-size: cover;
  }

  .content-card {
    padding: 1em 0;
  }

  .header-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .title-card {
    h3 {
      margin: 0;
      font-size: 1.2em;
    }
    span {
      margin: 0;
      font-size: 0.7em;
    }
    color: var(--gray-very-dark);
  }

  .icon-card {
    font-size: 1.2em;
  }

  .body-card {
    color: var(--gray-dark);
    font-size: 0.8em;
    font-weight: 300;
  }
`;

function Card() {
  return (
    <CardStyled>
      <a href="https://www.google.com">
        <div className="image"></div>
      </a>

      <Wrapper>
        <div className="content-card">
          <div className="header-card">
            <div className="title-card">
              <h3>Titulo de card</h3>
              <span>descripción</span>
            </div>
            <div className="icon-card">
              <a href="https://github.com/kevinjpuscan">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="body-card">
            <p>HOllasd asdasd asd asd asd </p>
          </div>
        </div>
      </Wrapper>
    </CardStyled>
  );
}

export default Card;
