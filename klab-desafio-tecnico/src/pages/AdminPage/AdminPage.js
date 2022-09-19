import React, { useEffect, useState } from "react";
import repositorio from "../../constants/repositorio.json";
import { GoTo } from "../../functions/GoTo";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const [search, setSearch] = useState("");
  const [quantityFilter, setQuantityFilter] = useState("");
  const [alphabeticOrder, setAlphabeticOrder] = useState("");
  const navigate = useNavigate();

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const onChangeQuantityFilter = (event) => {
    setQuantityFilter(event.target.value);
  };
  const onChangeAlphabeticOrder = (event) => {
    setAlphabeticOrder(event.target.value);
  };
  const cloneProducts = [...repositorio];

  const products =
    alphabeticOrder === ""
      ? repositorio
          .filter((item) => {
            return (
              item.produto.toLowerCase().includes(search.toLowerCase()) &&
              item.quantidade >= quantityFilter
            );
          })
          .map((itens, index) => {
            return (
              <tr key={index}>
                <td>{itens.produto}</td>
                <td>{itens.quantidade}</td>
                <td>{itens.defeito}</td>
                <td>{itens.quantidade - itens.defeito}</td>
              </tr>
            );
          })
      : cloneProducts
          .sort((a, b) => {
            if (a.produto < b.produto) return -1;

            if (a.produto > b.produto) return 1;

            return 0;
          })
          .filter((item) => {
            return (
              item.produto.toLowerCase().includes(search.toLowerCase()) &&
              item.quantidade >= quantityFilter
            );
          })
          .map((itens, index) => {
            return (
              <tr key={index}>
                <td>{itens.produto}</td>
                <td>{itens.quantidade}</td>
                <td>{itens.defeito}</td>
                <td>{itens.quantidade - itens.defeito}</td>
              </tr>
            );
          });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Quantidade em Estoque</th>
            <th>Peças com Defeitos</th>
            <th>Peças para Venda</th>
          </tr>
        </thead>
        <tbody>
          {products.length ? products : <p>Produto não encontrado</p>}
        </tbody>
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
      <select onChange={onChangeAlphabeticOrder}>
        <option disabled="disabled" select="true">
          Ordernar
        </option>
        <option value="">Sem ordem</option>
        <option value="Com ordem">Ordem Alfabética</option>
      </select>
      <p onClick={() => GoTo(navigate, `/`)}>ir para pagina da loja</p>
    </div>
  );
};
