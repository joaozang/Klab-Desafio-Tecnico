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
import {
  listSearch,
  listQuantity,
  listDefect,
  listSale,
  listOrder,
  listUpDown,
} from "../../constants/LocalStorage/StorageAdmin";

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
    } else if (order === "price") {
      return ShowAllProducts();
    }
  };

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
        <tbody>{products().length ? products() : <p>nada encontrado</p>}</tbody>
      </table>
      <input
        type="text"
        onChange={onChangeSearch}
        value={search}
        placeholder={"Filtro de texto"}
      />
      <select onChange={onChangeQuantityFilter} defaultValue={quantityFilter}>
        <option disabled="disabled" select="true">
          Quantidade em Estoque
        </option>
        <option value={0}>Todos os produtos</option>
        <option value={50}>Quantidade acima de 50</option>
        <option value={75}>Quantidade acima de 75</option>
      </select>
      <select onChange={onChangeOrder} defaultValue={order}>
        <option disabled="disabled" select="true">
          Ordernar
        </option>
        <option value="">Sem ordem</option>
        <option value="alphabetic">Ordem Alfabética</option>
        <option value="quantity">Ordem por Quantidade</option>
        <option value="defect">Ordem por Defeito</option>
        <option value="sale">Ordem por Venda</option>
        <option value="price">Order por Valor</option>
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
