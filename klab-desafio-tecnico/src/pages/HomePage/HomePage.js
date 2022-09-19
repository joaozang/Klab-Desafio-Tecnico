import React from "react";
import repositorio from "../../constants/repositorio.json";
import { Card } from "../../components/Card/Card";
import { Container, ProductsDiv } from "./styled";

export const HomePage = () => {
  return (
    <Container>
      <ProductsDiv>
        {repositorio.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.imagem}
              name={item.produto}
              quantitySale={item.quantidade - item.defeito}
            />
          );
        })}
      </ProductsDiv>
    </Container>
  );
};
