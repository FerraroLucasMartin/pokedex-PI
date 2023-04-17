// import React from "react";
// import { SearchButton as BackButton } from "../SearchBar/SBStyles";
// import styled from "styled-components";

// const DetailDiv = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-evenly;
//     width: 80%;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     margin-top: 15px;
//     margin-left: 100px;
//     margin-right: 100px;
//     padding-top: 15px;
// `;

// const ImgNameDiv = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// const Img = styled.img`
//     border-radius: 50%;
//     border-color: #333;
//     border-width: 2px;
//     border-style: solid;
// `;

// const Wrap = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;

// const Name = styled.h1`
//     font-size: 28px;
//     color: #333;
// `;

// export default function Detail({poke}) {

//     return (
//         <Wrap>
//             <DetailDiv>
//                 <ImgNameDiv>
//                     <Img src={poke.imagen} alt="" />
//                     <Name>{poke.nombre}</Name>
//                 </ImgNameDiv>

//                 <div>
//                     <h2>Ataque: {poke.ataque}</h2>
//                     <h2>Defensa: {poke.defensa}</h2>
//                     <h2>Altura: {poke.altura}</h2>
//                     <h2>Peso: {poke.peso}</h2>
//                     <h2>Velocidad: {poke.velocidad}</h2>
//                     <h2>HP: {poke.vida}</h2>
//                 </div>
//             </DetailDiv>

//             <BackButton>Back</BackButton>
//         </Wrap>
//     );
// }

import React from "react";
import { SearchButton as BackButton } from "../SearchBar/SBStyles";
import styled from "styled-components";
import { CardDiv, Image, Name, Type, TypesContainer } from "../Card/CardStyles";

const DetailDiv = styled(CardDiv)`
    flex-direction: row;
    justify-content: space-evenly;
    width: 90vw;
    background-color: #d0d0d0;
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
    padding-top: 15px;
`;

const ImgNameDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
`;

const PokemonName = styled.h2`
    font-size: 24px;
`;

const Img = styled.img`
    border-radius: 50%;
    border-color: #333;
    border-width: 2px;
    border-style: solid;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoTag = styled.h2`
    margin: 5px 0;
    font-size: 18px;
`;

const ValorTag = styled.span`
    font-size: 16px;
`;

export default function Detail({ poke }) {
    const {nombre} = poke
    console.log(nombre)
    const mayusPokeName = nombre.toUpperCase() + poke.nombre.slice(1);
    return (
        <div>
            <DetailDiv>
                <ImgNameDiv>
                    <Img src={poke.imagen} alt="" />
                    <PokemonName>{nombre}</PokemonName>
                    {/* <TypesContainer>
                        {poke.tipos.map((tipo, i) => (
                            <Type key={i} type={tipo}>
                                {tipo}
                            </Type>
                        ))}
                    </TypesContainer> */}
                </ImgNameDiv>

                <InfoContainer>
                    <InfoTag>Ataque:</InfoTag>
                    <ValorTag>{poke.ataque} Points</ValorTag>

                    <InfoTag>Defensa:</InfoTag>
                    <ValorTag>{poke.defensa} Points</ValorTag>

                    <InfoTag>Altura:</InfoTag>
                    <ValorTag>{poke.altura}</ValorTag>

                    <InfoTag>Peso:</InfoTag>
                    <ValorTag>{poke.peso} gr. </ValorTag>

                    <InfoTag>Velocidad:</InfoTag>
                    <ValorTag>{poke.velocidad} Points</ValorTag>

                    <InfoTag>Vida:</InfoTag>
                    <ValorTag>{poke.vida} HP</ValorTag>
                </InfoContainer>
            </DetailDiv>

            <BackButton>Back</BackButton>
        </div>
    );
}
