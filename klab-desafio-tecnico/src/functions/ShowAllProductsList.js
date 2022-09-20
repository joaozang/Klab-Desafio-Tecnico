import { TdContent, TrContent } from "../reusableStyles/Table";

export const ShowAllProductsList = (array) => {
  return array.map((itens, index) => {
    return (
      <TrContent key={index}>
        <TdContent>{itens.produto}</TdContent>
        <TdContent>{itens.quantidade}</TdContent>
        <TdContent>{itens.defeito}</TdContent>
        <TdContent>{itens.quantidade - itens.defeito}</TdContent>
        <TdContent>
          {itens.valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </TdContent>
      </TrContent>
    );
  });
};
