import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container-fluid">
        <p>© lorem ipsum</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;

// STYLED COMPONENTS STYLES
const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--deep-dark);
  color: var(--grey);
  line-height: 2;
  text-align: right;
`;
