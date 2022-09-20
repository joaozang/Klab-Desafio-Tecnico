import React from "react";
import { Gif, Container, Text, BackButton } from "./styled";
import { useNavigate } from "react-router-dom";
import { GoTo } from "../../functions/GoTo";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Text>URL Não Encontrada</Text>
      <Gif src="https://i.gifer.com/yH.gif" />
      <BackButton onClick={() => GoTo(navigate, "/")}>
        Voltar para Home
      </BackButton>
    </Container>
  );
};
