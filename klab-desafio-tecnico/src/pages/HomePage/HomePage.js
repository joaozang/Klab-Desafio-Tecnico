import React from "react";
import repositorio from "../../constants/repositorio.json";

export const HomePage = () => {
  return (
    <div>
      <table>
        <th>Nome do Produto</th>
        <th>Quantidade em Estoque</th>
        <th>Peças com Defeitos</th>
        <th>Peças para Venda</th>
        {repositorio.map((itens) => {
          return (
            <tr>
              <td>{itens.produto}</td>
              <td>{itens.quantidade}</td>
              <td>{itens.defeito}</td>
              <td>{itens.quantidade - itens.defeito}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
