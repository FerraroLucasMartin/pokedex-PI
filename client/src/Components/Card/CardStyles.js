import styled from "styled-components";

export const CardDiv = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  width: 135px;
  height: 1%;
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
`;

export const Name = styled.h2`
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Type = styled.span`
  background-color: #c4c4c4;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  margin: 2px;
  padding: 2px 6px;
  background-color: ${props => {
    switch(props.type) {
      case 'fire':
        return 'orange';
      case 'water':
        return 'blue';
      case 'grass':
        return 'green';
      // add more cases for other types
      default:
        return 'gray';
    }
  }};
`;

export const TypesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;