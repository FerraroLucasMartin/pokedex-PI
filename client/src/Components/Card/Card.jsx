import React from "react";
import { CardDiv, TypesContainer, Type, Name, Image } from "./CardStyles";

export const Card = ({ pokeName, pokeImg, types, onSearch }) => {
    const mayusPokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

    const typesMap = () => {
        if (Array.isArray(types)) {
            return types.map((element) => {
                return (
                    <Type type={element.type.name}>
                        {element.type.name.charAt(0).toUpperCase() +
                            element.type.name.slice(1)}
                    </Type>
                );
            });
        } else return <Type type={types}>{types}</Type>;
    };

    return (
        <CardDiv onClick={() => onSearch(pokeName, true)}>
            <Image src={pokeImg} alt="" />
            <Name>{mayusPokeName}</Name>
            <TypesContainer>{typesMap()}</TypesContainer>
        </CardDiv>
    );
};
