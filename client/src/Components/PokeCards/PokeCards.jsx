import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

import { Card } from "../Card/Card";
import { CardsContainer } from "./PokeCardsStyles";

import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import { getPokePage, getTypes } from "../../Redux/Actions";

export default function PokeCards (props) {
    const [loading, setloading] = useState(true);

    const pagina = props.pagina;
    const { pageArray } = props;

    const dispatch = useDispatch();
    useEffect(() => {
        props.getPokePage(dispatch, pagina);
        setloading(false);
        props.menuFlagHandler()
    }, [pagina]);

    

    const cardsMap = props.pokePage.map(function (element) {
        return (
            <Card
                id={element.id}
                pokeName={element.nombre}
                pokeImg={element.imagen}
                types={element.types}
            />
        );
    });

     const filterMap = props.filterPage.map(function (element) {
        return (
            <Card
                id={element.id}
                pokeName={element.nombre}
                pokeImg={element.imagen}
                types={element.types}
            />
        );
    });

    {
        if (loading) {
            return (
                <div>
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1000/1*8OlHww3sk8kiYEfEEIZIkw.gif"
                        alt="Loading..."
                    />
                    <h3>Loading...</h3>
                </div>
            );
        } else {
            if(props.filterFlag) {return <CardsContainer>{filterMap}</CardsContainer>}
            else return <CardsContainer>{cardsMap}</CardsContainer>;
        }
    }
};
