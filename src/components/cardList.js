import React from "react";
import styled from "styled-components";
import Card from "./card";

export const CardListStyled = styled.div`
  width: 100%;
  display: grid;
  gap: 2em;
  margin: 2em 0;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3em;
  }

  @media (min-width: 700px) and (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
    gap: 3em;
  }
`;

function CardList({ list }) {
  return (
    <CardListStyled>
      {list.map((element, idx) => (
        <Card key={idx} element={element} />
      ))}
    </CardListStyled>
  );
}

export default CardList;
