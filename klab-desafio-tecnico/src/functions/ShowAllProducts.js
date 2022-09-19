export const ShowAllProducts = (array) => {
  return array.map((itens, index) => {
    return (
      <tr key={index}>
        <td>{itens.produto}</td>
        <td>{itens.quantidade}</td>
        <td>{itens.defeito}</td>
        <td>{itens.quantidade - itens.defeito}</td>
        <td>
          {itens.valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </td>
      </tr>
    );
  });
};
