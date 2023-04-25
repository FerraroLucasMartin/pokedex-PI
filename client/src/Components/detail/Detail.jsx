
import React from "react";
import { SearchButton as BackButton } from "../SearchBar/SBStyles";
import styled from "styled-components";
import {DetailDiv, ImgNameDiv,PokemonName,Img,InfoContainer,InfoTag,ValorTag} from "./detailStyles"
import { CardDiv, Image, Name, Type, TypesContainer } from "../Card/CardStyles";


export default function Detail({ poke, backHandler }) {
    // const {nombre} = poke||""
    // const mayusPokeName = nombre.toUpperCase() + poke.nombre.slice(1) || "";
    return (
        <div>
            <DetailDiv>
                <ImgNameDiv>
                    <Img src={poke.imagen} alt="" />
                    <PokemonName>{poke.nombre}</PokemonName>
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
                            <BackButton onClick={()=>backHandler()} >Back Home</BackButton>
            </DetailDiv>


        </div>
    );
}
