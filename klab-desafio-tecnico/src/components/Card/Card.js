import React from "react";
import cadeira from "../../assets/cadeira.jpeg";
import lavadoura from "../../assets/lavadoura.webp";
import notebook from "../../assets/notebook.jpeg";
import sofa from "../../assets/sofa.jpeg";
import tv from "../../assets/tv.jpg";
import {
  Container,
  ProductImage,
  DetailsDiv,
  ProductName,
  ProductQuantity,
  QuantityNumber,
  ContainerGeral,
} from "./styled";

export const Card = (props) => {
  return (
    <ContainerGeral>
      <Container>
        {props.image === "cadeira.jpeg" && <ProductImage src={cadeira} />}
        {props.image === "lavadoura.webp" && <ProductImage src={lavadoura} />}
        {props.image === "notebook.jpeg" && <ProductImage src={notebook} />}
        {props.image === "sofa.jpeg" && <ProductImage src={sofa} />}
        {props.image === "tv.jpg" && <ProductImage src={tv} />}
        <DetailsDiv>
          <ProductName>{props.name}</ProductName>
          <ProductQuantity>
            Disponíveis: <QuantityNumber>{props.quantitySale}</QuantityNumber>
          </ProductQuantity>
        </DetailsDiv>
      </Container>
    </ContainerGeral>
  );
};
