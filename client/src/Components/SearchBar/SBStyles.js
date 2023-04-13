import styled from "styled-components";

export const SearchButton = styled.button`
  background-color: #ffcc33;
  border: 1px solid #000;
  border-radius: 10px;
  color: #000;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  padding: 10px 20px;
  text-transform: uppercase;
  text-shadow: 1px 1px #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ffdd55;
    color: #fff;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const SearchInput = styled.input`
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  line-height: 15px; //Porque se le cortaban los pixeles de arriba a las letras.
  text-transform: uppercase; //lo subo todo a caps para seguir estetica.
  transition: all 0.2s ease-in-out; //estilo suave al focus...
  margin-right: 10px;
 

  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px 2px #ffcc33;
  }
`;



