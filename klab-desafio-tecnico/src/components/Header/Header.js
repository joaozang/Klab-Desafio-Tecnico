import React from "react";
import {
  Container,
  Logo,
  ContainerLogo,
  ContainerOptions,
  OptionStyle,
  AdminDiv,
  IconStyle,
  AdminTextStyle,
} from "./styled";
import logo from "../../assets/logo.png";
import AdminIcon from "../../assets/adminIcon.png";
import HomeIcon from "../../assets/homeIcon.png";
import { GoTo } from "../../functions/GoTo";
import { useNavigate } from "react-router-dom";

export const Header = (type) => {
  const navigate = useNavigate();
  if (type === "admin") {
    return (
      <Container>
        <ContainerLogo>
          <Logo src={logo}></Logo>
        </ContainerLogo>
        <ContainerOptions>
          <OptionStyle onClick={() => GoTo(navigate, "/underConstruction")}>
            SOBRE
          </OptionStyle>
          <OptionStyle onClick={() => GoTo(navigate, "/underConstruction")}>
            TRABALHE CONOSCO
          </OptionStyle>
          <OptionStyle onClick={() => GoTo(navigate, "/underConstruction")}>
            CONTATO
          </OptionStyle>
          <AdminDiv onClick={() => GoTo(navigate, "/admin")}>
            <AdminTextStyle>ÁREA ADMINISTRATIVA</AdminTextStyle>
            <IconStyle src={AdminIcon} />
          </AdminDiv>
        </ContainerOptions>
      </Container>
    );
  }
  if (type === "home") {
    return (
      <Container>
        <ContainerLogo>
          <Logo src={logo}></Logo>
        </ContainerLogo>
        <ContainerOptions>
          <OptionStyle onClick={() => GoTo(navigate, "/underConstruction")}>
            SOBRE
          </OptionStyle>
          <OptionStyle onClick={() => GoTo(navigate, "/underConstruction")}>
            TRABALHE CONOSCO
          </OptionStyle>
          <OptionStyle onClick={() => GoTo(navigate, "/underConstruction")}>
            CONTATO
          </OptionStyle>
          <AdminDiv onClick={() => GoTo(navigate, "/")}>
            <AdminTextStyle>VOLTAR À LOJA</AdminTextStyle>
            <IconStyle src={HomeIcon} />
          </AdminDiv>
        </ContainerOptions>
      </Container>
    );
  }
};
