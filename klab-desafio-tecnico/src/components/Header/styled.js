import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const ContainerLogo = styled.div`
  padding: 0px 20px;
  width: 100%;
  height: 110px;
  background-color: #7b0000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 110px;
  height: 110px;
`;
export const ContainerOptions = styled.div`
  width: 100%;
  background-color: #c2c2c2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const OptionStyle = styled.p`
  text-align: center;
  border-bottom: 1px solid;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
  transition: 0.6s;
  :hover {
    background-color: #f26d70;
    border-bottom: 1px solid;
    border-radius: 20px;
  }
`;
export const AdminDiv = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  border-bottom: 1px solid #d60000;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.6s;
  :hover {
    background-color: #f56d70;
    border-bottom: 1px solid;
    border-radius: 20px;
  }
`;
export const IconStyle = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 5px;
`;
export const AdminTextStyle = styled.p``;
