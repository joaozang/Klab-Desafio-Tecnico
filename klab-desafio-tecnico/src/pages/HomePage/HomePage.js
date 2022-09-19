import React, { useEffect, useState } from "react";
import repositorio from "../../constants/repositorio.json";
import {
  Container,
  ProductsDiv,
  FiltersDiv,
  TitleDiv,
  TitleStyle,
} from "./styled";
import { ShowAllProductsCard } from "../../functions/ShowAllProductsCard";
import { FilterDefaultCard } from "../../functions/Filters/FilterDefaultCard";
import { FilterAlphabeticCard } from "../../functions/Filters/FilterAlphabeticCard";
import { FilterQuantityCard } from "../../functions/Filters/FilterQuantityCard";
import { FilterPriceCard } from "../../functions/Filters/FilterPriceCard";
import {
  cardSearch,
  cardQuantity,
  cardOrder,
  cardUpDown,
} from "../../constants/LocalStorage/StorageHome";

import { Header } from "../../components/Header/Header";
import UpIcon from "../../assets/upIcon.png";
import DownIcon from "../../assets/downIcon.png";
import { Input } from "../../reusableStyles/Input";
import { Select } from "../../reusableStyles/Select";
import { Option } from "../../reusableStyles/Option";
import {
  DivUpDown,
  IconUpDown,
  TextUpDown,
} from "../../reusableStyles/UpDownStyle";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";

export const HomePage = () => {
  const [searchCard, setSearchCard] = useState(cardSearch ? cardSearch : "");
  const [quantityFilterCard, setQuantityFilterCard] = useState(
    cardQuantity ? cardQuantity : 0
  );
  const [orderCard, setOrderCard] = useState(cardOrder ? cardOrder : "");
  const [upDownCard, setUpDownCard] = useState(cardUpDown ? cardUpDown : "up");

  const onChangeSearchCard = (event) => {
    setSearchCard(event.target.value);
  };
  const onChangeQuantityFilterCard = (event) => {
    setQuantityFilterCard(event.target.value);
  };
  const onChangeOrderCard = (event) => {
    setOrderCard(event.target.value);
  };

  const upDownFunction = (data) => {
    setUpDownCard(data);
  };

  useEffect(() => {
    localStorage.setItem("searchCard", searchCard);
    localStorage.setItem("quantityCard", quantityFilterCard);
    localStorage.setItem("orderCard", orderCard);
    localStorage.setItem("upDownCard", upDownCard);
  }, [searchCard, quantityFilterCard, orderCard, upDownCard]);

  const cloneProducts = [...repositorio];
  const parameters = {
    cloneProducts,
    search: searchCard,
    quantityFilter: quantityFilterCard,
  };

  const productsCard = () => {
    if (orderCard === "") {
      return ShowAllProductsCard(FilterDefaultCard(parameters));
    } else if (orderCard === "alphabetic") {
      return ShowAllProductsCard(FilterAlphabeticCard(parameters, upDownCard));
    } else if (orderCard === "quantity") {
      return ShowAllProductsCard(FilterQuantityCard(parameters, upDownCard));
    } else if (orderCard === "price") {
      return ShowAllProductsCard(FilterPriceCard(parameters, upDownCard));
    }
  };

  return (
    <Container>
      {Header("admin")}
      <TitleDiv>
        <TitleStyle>NOSSOS PRODUTOS</TitleStyle>
      </TitleDiv>
      <FiltersDiv>
        <Input
          type="text"
          onChange={onChangeSearchCard}
          value={searchCard}
          placeholder={"Filtro de texto"}
        />
        <Select
          onChange={onChangeQuantityFilterCard}
          defaultValue={quantityFilterCard}
        >
          <Option disabled="disabled" select="true">
            Quantidade em Estoque
          </Option>
          <Option value={0}>Todos os produtos</Option>
          <Option value={50}>Quantidade acima de 50</Option>
          <Option value={75}>Quantidade acima de 75</Option>
        </Select>
        <Select onChange={onChangeOrderCard} defaultValue={orderCard}>
          <Option disabled="disabled" select="true">
            Ordernar
          </Option>
          <Option value="">Sem ordem</Option>
          <Option value="alphabetic">Ordem Alfabética</Option>
          <Option value="quantity">Ordem por Quantidade</Option>
          <Option value="price">Order por Valor</Option>
        </Select>
        <DivUpDown onClick={() => upDownFunction("up")}>
          <TextUpDown>Crescente</TextUpDown>
          <IconUpDown src={UpIcon} />
        </DivUpDown>
        <DivUpDown onClick={() => upDownFunction("down")}>
          <TextUpDown>Decrescente</TextUpDown>
          <IconUpDown src={DownIcon} />
        </DivUpDown>
      </FiltersDiv>

      <ProductsDiv>
        {productsCard().length ? productsCard() : <Card type="notfound" />}
      </ProductsDiv>
      <Footer />
    </Container>
  );
};
