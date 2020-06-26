import React from "react";
import styled from "styled-components";
import SocialLinks from "./socialLinks";
import Wrapper from "./wrapper";

export const FooterStyled = styled.div`
  padding: 2.5em 0;
  background-color: var(--gray-very-dark);
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Footer() {
  return (
    <FooterStyled>
      <Wrapper>
        <SocialLinks center={true} />
        <p className="mail">keivnjpuscan@gmail.com</p>
      </Wrapper>
    </FooterStyled>
  );
}

export default Footer;
