import React from "react";
import { SearchButton as BackButton } from "../SearchBar/SBStyles";
import styled from "styled-components";
import {
    DetailDiv,
    ImgNameDiv,
    PokemonName,
    Img,
    InfoContainer,
    InfoTag,
    ValorTag,
} from "./detailStyles";

import { CardDiv, Image, Name, Type, TypesContainer } from "../Card/CardStyles";

export default function Detail({ poke, backHandler }) {
    const {nombre} = poke||""
    const mayusPokeName = nombre.charAt(0).toUpperCase() + poke.nombre.slice(1) || "";

    const typesMap = () => {
        if (Array.isArray(poke.types)) {
            return poke.types.map((element) => {
                return (
                    <Type key={element.type.name} style={{marginTop:"-15px"}} type={element.type.name}>
                        {element.type.name.charAt(0).toUpperCase() +
                            element.type.name.slice(1)}
                    </Type>
                );
            });
        } else return <Type type={poke.types}>{poke.types}</Type>;
    };

    return (
        <div>
            <DetailDiv>
                <ImgNameDiv>
                    <Img src={poke.imagen} alt="" />
                    <PokemonName>{mayusPokeName}</PokemonName>
                    <TypesContainer style={{marginTop:"-2px"}} >{typesMap()}</TypesContainer>
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
                <BackButton onClick={() => backHandler()}>Back Home</BackButton>
            </DetailDiv>
        </div>
    );
}
