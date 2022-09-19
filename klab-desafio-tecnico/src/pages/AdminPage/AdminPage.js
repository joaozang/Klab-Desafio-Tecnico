import React, { useEffect, useState } from "react";
import repositorio from "../../constants/repositorio.json";
import { GoTo } from "../../functions/GoTo";
import { useNavigate } from "react-router-dom";
import { FilterDefault } from "../../functions/Filters/FilterDefault";
import { FilterAlphabetic } from "../../functions/Filters/FilterAlphabetic";
import { ShowAllProducts } from "../../functions/ShowAllProducts";
import { FilterQuantity } from "../../functions/Filters/FilterQuantity";
import { FilterDefect } from "../../functions/Filters/FilterDefect";
import { FilterSale } from "../../functions/Filters/FilterSale";

export const AdminPage = () => {
  const [search, setSearch] = useState("");
  const [quantityFilter, setQuantityFilter] = useState("");
  const [defectFilter, setDefectFilter] = useState("");
  const [saleFilter, setSaleFilter] = useState("");
  const [order, setOrder] = useState("");
  const [upDown, setUpDown] = useState("up");

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

  const cloneProducts = [...repositorio];
  const parameters = {
    cloneProducts,
    search,
    quantityFilter,
    defectFilter,
    saleFilter,
  };

  const products = () => {
    if (order === "") {
      return ShowAllProducts(FilterDefault(parameters));
    } else if (order === "alphabetic") {
      return ShowAllProducts(FilterAlphabetic(parameters, upDown));
    } else if (order === "quantity") {
      return ShowAllProducts(FilterQuantity(parameters, upDown));
    } else if (order === "defect") {
      return ShowAllProducts(FilterDefect(parameters, upDown));
    } else if (order === "sale") {
      return ShowAllProducts(FilterSale(parameters, upDown));
    }
  };
  console.log(upDown);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Quantidade em Estoque</th>
            <th>Peças com Defeitos</th>
            <th>Peças para Venda</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>{products()}</tbody>
      </table>
      <input
        type="text"
        onChange={onChangeSearch}
        value={search}
        placeholder={"Filtro de texto"}
      />
      <select onChange={onChangeQuantityFilter}>
        <option disabled="disabled" select="true">
          Quantidade em Estoque
        </option>
        <option value={0}>Todos os produtos</option>
        <option value={50}>Quantidade acima de 50</option>
        <option value={75}>Quantidade acima de 75</option>
      </select>
      <select onChange={onChangeOrder}>
        <option disabled="disabled" select="true">
          Ordernar
        </option>
        <option value="">Sem ordem</option>
        <option value="alphabetic">Ordem Alfabética</option>
        <option value="quantity">Ordem por Quantidade</option>
        <option value="defect">Ordem por Defeito</option>
        <option value="sale">Ordem por Venda</option>
      </select>
      <p onClick={() => upDownFunction("up")}>UP</p>
      <p onClick={() => upDownFunction("down")}>DOWN</p>
      <input
        placeholder="Peças com defeito"
        type="number"
        onChange={onChangeDefectFilter}
        value={defectFilter}
      />
      <input
        placeholder="Peças para venda"
        type="number"
        onChange={onChangeSaleFilter}
        value={saleFilter}
      />
      <p onClick={() => GoTo(navigate, `/`)}>ir para pagina da loja</p>
    </div>
  );
};
