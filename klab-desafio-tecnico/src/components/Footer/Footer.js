import React from "react";
import { Container, LogoStyle } from "./styled";
import FooterLogo from "../../assets/footerLogo.png";

export const Footer = () => {
  return (
    <Container>
      <LogoStyle src={FooterLogo} />
    </Container>
  );
};
