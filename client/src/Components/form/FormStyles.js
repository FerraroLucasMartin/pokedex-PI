import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FormContainer = styled.form`
 display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  width: 800px;
  height: auto;
`;

export const SubCont= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px;
`

export const FormTitle = styled.h2`
font-family: 'Press Start 2P', cursive;
  font-size: 24px;
  font-weight: bold;
  color: #e84393;
  margin-bottom: 30px;
`;

export const FormLabel = styled.label`
font-family: 'Press Start 2P', cursive;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Press Start 2P', cursive;
  width:100%;
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

export const SelectInput = styled.select`
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Press Start 2P', cursive;
  width:100%;
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

export const FormButton = styled.button`
background-color: #ffcc33;
  border: 1px solid #000;
  border-radius: 10px;
  color: #000;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  padding: 13px;
  text-transform: uppercase;
  text-shadow: 1px 1px #fff;
  transition: all 0.2s ease-in-out;
  margin-top: 25px;
  margin-left: 22px;
  width:100%;

  &:hover {
    background-color: #ffdd55;
    color: #fff;
    cursor: pointer;
    transform: scale(1.05);
  }
`;