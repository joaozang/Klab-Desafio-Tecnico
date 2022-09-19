import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import repositorio from "../../constants/repositorio.json";
import { Container, ProductsDiv } from "./styled";
import { ShowAllProductsCard } from "../../functions/ShowAllProductsCard";
import {
  cardSearch,
  cardQuantity,
  cardOrder,
  cardUpDown,
} from "../../constants/LocalStorage/StorageHome";
import { FilterDefaultCard } from "../../functions/Filters/FilterDefaultCard";
import { FilterAlphabeticCard } from "../../functions/Filters/FilterAlphabeticCard";
import { FilterQuantityCard } from "../../functions/Filters/FilterQuantityCard";
import { FilterPriceCard } from "../../functions/Filters/FilterPriceCard";

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
      <input
        type="text"
        onChange={onChangeSearchCard}
        value={searchCard}
        placeholder={"Filtro de texto"}
      />
      <select
        onChange={onChangeQuantityFilterCard}
        defaultValue={quantityFilterCard}
      >
        <option disabled="disabled" select="true">
          Quantidade em Estoque
        </option>
        <option value={0}>Todos os produtos</option>
        <option value={50}>Quantidade acima de 50</option>
        <option value={75}>Quantidade acima de 75</option>
      </select>
      <select onChange={onChangeOrderCard} defaultValue={orderCard}>
        <option disabled="disabled" select="true">
          Ordernar
        </option>
        <option value="">Sem ordem</option>
        <option value="alphabetic">Ordem Alfabética</option>
        <option value="quantity">Ordem por Quantidade</option>
        <option value="price">Order por Valor</option>
      </select>
      <p onClick={() => upDownFunction("up")}>UP</p>
      <p onClick={() => upDownFunction("down")}>DOWN</p>
      <ProductsDiv>{productsCard()}</ProductsDiv>
    </Container>
  );
};
