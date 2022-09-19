import React, { useEffect, useState } from "react";
import repositorio from "../../constants/repositorio.json";
import {
  Container,
  FiltersDiv,
  TitleDiv,
  TitleStyle,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  NotFoundMessage,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { FilterDefault } from "../../functions/Filters/FilterDefault";
import { FilterAlphabetic } from "../../functions/Filters/FilterAlphabetic";
import { ShowAllProductsList } from "../../functions/ShowAllProductsList";
import { FilterQuantity } from "../../functions/Filters/FilterQuantity";
import { FilterDefect } from "../../functions/Filters/FilterDefect";
import { FilterSale } from "../../functions/Filters/FilterSale";
import {
  listSearch,
  listQuantity,
  listDefect,
  listSale,
  listOrder,
  listUpDown,
} from "../../constants/LocalStorage/StorageAdmin";
import { Header } from "../../components/Header/Header";
import { Input } from "../../reusableStyles/Input";
import { Select } from "../../reusableStyles/Select";
import { Option } from "../../reusableStyles/Option";
import UpIcon from "../../assets/upIcon.png";
import DownIcon from "../../assets/downIcon.png";
import {
  DivUpDown,
  IconUpDown,
  TextUpDown,
} from "../../reusableStyles/UpDownStyle";
import { Footer } from "../../components/Footer/Footer";

export const AdminPage = () => {
  const [search, setSearch] = useState(listSearch ? listSearch : "");
  const [quantityFilter, setQuantityFilter] = useState(
    listQuantity ? listQuantity : 0
  );
  const [defectFilter, setDefectFilter] = useState(
    listDefect ? listDefect : ""
  );
  const [saleFilter, setSaleFilter] = useState(listSale ? listSale : "");
  const [order, setOrder] = useState(listOrder ? listOrder : "");
  const [upDown, setUpDown] = useState(listUpDown ? listUpDown : "up");

  const navigate = useNavigate();

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const onChangeQuantityFilter = (event) => {
    setQuantityFilter(event.target.value);
  };
  const onChangeDefectFilter = (event) => {
    setDefectFilter(event.target.value);
  };
  const onChangeSaleFilter = (event) => {
    setSaleFilter(event.target.value);
  };
  const onChangeOrder = (event) => {
    setOrder(event.target.value);
  };
  const upDownFunction = (data) => {
    setUpDown(data);
  };

  useEffect(() => {
    localStorage.setItem("searchList", search);
    localStorage.setItem("quantityFilterList", quantityFilter);
    localStorage.setItem("defectFilterList", defectFilter);
    localStorage.setItem("saleFilterList", saleFilter);
    localStorage.setItem("orderList", order);
    localStorage.setItem("upDownList", upDown);
  }, [search, quantityFilter, defectFilter, saleFilter, order, upDown]);

  const cloneProducts = [...repositorio];
  const parameters = {
    cloneProducts,
    search,
    quantityFilter,
    defectFilter,
    saleFilter,
  };

  const productsList = () => {
    if (order === "") {
      return ShowAllProductsList(FilterDefault(parameters));
    } else if (order === "alphabetic") {
      return ShowAllProductsList(FilterAlphabetic(parameters, upDown));
    } else if (order === "quantity") {
      return ShowAllProductsList(FilterQuantity(parameters, upDown));
    } else if (order === "defect") {
      return ShowAllProductsList(FilterDefect(parameters, upDown));
    } else if (order === "sale") {
      return ShowAllProductsList(FilterSale(parameters, upDown));
    } else if (order === "price") {
      return ShowAllProductsList();
    }
  };

  return (
    <Container>
      {Header("home")}
      <TitleDiv>
        <TitleStyle>ÁREA ADMINISTRATIVA</TitleStyle>
      </TitleDiv>
      <FiltersDiv>
        <Input
          type="text"
          onChange={onChangeSearch}
          value={search}
          placeholder={"Filtro de texto"}
        />
        <Select onChange={onChangeQuantityFilter} defaultValue={quantityFilter}>
          <Option disabled="disabled" select="true">
            Quantidade em Estoque
          </Option>
          <Option value={0}>Todos os produtos</Option>
          <Option value={50}>Quantidade acima de 50</Option>
          <Option value={75}>Quantidade acima de 75</Option>
        </Select>
        <Input
          placeholder="Peças com defeito"
          type="number"
          onChange={onChangeDefectFilter}
          value={defectFilter}
        />
        <Input
          placeholder="Peças para venda"
          type="number"
          onChange={onChangeSaleFilter}
          value={saleFilter}
        />
        <Select onChange={onChangeOrder} defaultValue={order}>
          <Option disabled="disabled" select="true">
            Ordernar
          </Option>
          <Option value="">Sem ordem</Option>
          <Option value="alphabetic">Ordem Alfabética</Option>
          <Option value="quantity">Ordem por Quantidade</Option>
          <Option value="defect">Ordem por Defeito</Option>
          <Option value="sale">Ordem por Venda</Option>
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
      <Table>
        <Thead>
          <Tr>
            <Th>Nome do Produto</Th>
            <Th>Quantidade em Estoque</Th>
            <Th>Peças com Defeitos</Th>
            <Th>Peças para Venda</Th>
            <Th>Valor</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productsList().length ? (
            productsList()
          ) : (
            <NotFoundMessage>NADA ENCONTRADO</NotFoundMessage>
          )}
        </Tbody>
      </Table>
      <Footer />
    </Container>
  );
};
