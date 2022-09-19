import React from "react";
import { useNavigate } from "react-router-dom";
import { GoTo } from "../../functions/GoTo";
import { Container, Text, Gif, BackButton } from "./styled";

export const UnderConstructionPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Text>Página em Construção</Text>
      <Gif src="https://i.gifer.com/ZSj2.gif" />
      <BackButton onClick={() => GoTo(navigate, "/")}>
        Voltar para Home
      </BackButton>
    </Container>
  );
};
