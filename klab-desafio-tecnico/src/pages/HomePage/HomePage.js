import React, { useEffect, useState } from "react";
import repositorio from "../../constants/repositorio.json";


export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [quantityFilter, setQuantityFilter] = useState("");

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const onChangeQuantityFilter = (event) => {
    setQuantityFilter(event.target.value);
  };

  const products = repositorio
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

  console.log(repositorio);
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
    </div>
  );
};
