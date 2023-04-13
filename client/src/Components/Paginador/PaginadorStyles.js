import styled from "styled-components";

export const Container=styled.div`
display: flex;
justify-content: space-evenly;
padding: 10px 20px;
width:100%
`;

export const Selector = styled.select`
background-color: #8BBAE8;
border-radius: 10px;
   color: #ffffff;
   border: 2px solid #333333;
   padding: 5px;
   font-family: 'Press Start 2P', cursive;
   text-transform: uppercase;
   max-height: 100px; //para que no se haga una lista larguisima en los tipos.
  overflow-y: auto;
  font-size: 10px;
   /* appearance: none; */
`