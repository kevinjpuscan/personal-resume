import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import Section from "./section";
import techImages from "../images/tech";

const fullColor = keyframes`
  from {
    filter: grayscale(100%);
  }

  to {
    filter:none;
  }
`;

export const ListStack = styled.div`
  margin: 2em 0;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 3em;
  }

  @media (min-width: 700px) and (max-width: 1199px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3em;
  }
`;

export const CardImage = styled.div`
  height: 100px;
  width: 100%;
  border-radius: 5px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(100%);

  &:hover {
    filter: none;
    animation: ${fullColor} 0.5s;
  }
`;

function StackTech() {
  return (
    <Fragment>
      <Section title="Tech" isWhite={true}>
        <ListStack>
          {techImages.map((image, idx) => (
            <CardImage key={idx} image={image} />
          ))}
        </ListStack>
      </Section>
    </Fragment>
  );
}

export default StackTech;
