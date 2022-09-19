import styled from "styled-components";

export const ContainerGeral = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 500px;
  height: 250px;
  background-color: #ee7323;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 30px;
`;
export const DetailsDiv = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const ProductName = styled.p`
  font-weight: bold;
`;
export const ProductQuantity = styled.div`
  display: flex;
`;
export const QuantityNumber = styled.p`
  font-weight: bold;
  margin-left: 10px;
`;
