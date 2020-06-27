import React from "react";
import styled, { css } from "styled-components";

export const CardStyled = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .image {
    border-radius: 5px 5px 0 0;
    height: 210px;
    background-image: url(${props => props.image});
    ${props =>
      props.imageSize
        ? css`
            background-size: ${props => props.imageSize};
            background-repeat: no-repeat;
            background-position: center;
          `
        : css`
            background-size: cover;
          `}
  }

  .content-card {
    padding: 1em 2em;
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
    a {
      color: var(--gray-very-darl);
      text-decoration: none;
    }
  }

  .body-card {
    color: var(--gray-dark);
    font-size: 0.8em;
    font-weight: 300;
  }
`;

function Card({ element }) {
  const {
    title,
    owner,
    description,
    image,
    github,
    website,
    imageSize
  } = element;
  return (
    <CardStyled image={image} imageSize={imageSize}>
      <a href={website}>
        <div className="image"></div>
      </a>

      <div className="content-card">
        <div className="header-card">
          <div className="title-card">
            <h3>{title}</h3>
            <span>{owner}</span>
          </div>
          <div className="icon-card">
            {github && (
              <a href={github}>
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
        <div className="body-card">
          <p>{description}</p>
        </div>
      </div>
    </CardStyled>
  );
}

export default Card;
