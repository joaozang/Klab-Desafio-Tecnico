import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d2d2d2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FiltersDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 50px;
  flex-wrap: wrap;
`;
export const TitleDiv = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TitleStyle = styled.p`
  padding-left: 5px;
  font-size: 30px;
  font-weight: bold;
  border-left: 3px solid #7b0000;
`;
export const Table = styled.table`
  width: 90%;
  border: 2px solid #7b0000;
  padding: 10px;
  @media (max-width: 400px) {
    width: 50%;
  }
`;
export const Thead = styled.thead`
  background-color: #c2c2c2;
  font-size: 20px;
  @media (max-width: 705px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
export const Tr = styled.tr``;
export const Th = styled.th``;
export const Tbody = styled.tbody`
  background-color: white;
  text-align: center;
`;
export const NotFoundMessage = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: red;
`;
