import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  max-width: 1312px;
  margin: auto;
  padding: 0 2rem;
  @media (min-width: 1200px) {
    padding: 0 160px;
  }

  @media (min-width: 800px) and (max-width: 1199px) {
    padding: 0 80px;
  }
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
