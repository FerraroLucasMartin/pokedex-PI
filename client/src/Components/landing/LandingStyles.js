import styled from "styled-components";


export const Container= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  height: 100vh;
  `

export const FullImg = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 30%;
    object-fit: cover;
  z-index: -1; /* llevo atras la img, (no se porque no use backgroundimg)*/
`

export const PokeParag = styled.p`
 display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border: 1px solid #555;
  border-radius: 10px;
  padding: 20px;
  font-family: 'Press Start 2P', cursive;
  font-size: 16px;
  color: #333333;
  width: 45%;
`
export const StartButton = styled.button`
  background-color: #ffcc33;
  border: 1px solid #000;
  border-radius: 10px;
  color: #000;
  font-family: 'Press Start 2P', cursive;
  font-size: 20px;
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






