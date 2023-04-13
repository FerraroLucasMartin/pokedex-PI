import React from "react";

import { SearchButton } from "../SearchBar/SBStyles";
import { Container, Selector } from "./PaginadorStyles";

export const Paginador = (props) => {
    const totalPags = Math.ceil(1279 / 12);
    const pageNumArray = [];
    const paginador = () => {
        for (let index = 1; index < totalPags; index++) {
            pageNumArray.push(<option value={index}>Pagina {index}</option>);
        }
    };
    paginador();

    const selectHandler = async (event) => {
        const queryNum = event.target.value;
        props.pageChange(queryNum);
    };
    const typesArray = props.types[0];
    const OptionTipos = typesArray.map((element) => {
        return <option value={element.nombre}>{element.nombre}</option>;
    });

    return (
        <Container>
            <Selector name="paginas" onClick={selectHandler}>
                {pageNumArray}
            </Selector>

            <Selector name="Ataque" onClick={selectHandler}>
                <option value="" disabled selected hidden>
                    Orden x Ataque
                </option>
                <option value="mayor">Mayor Ataque</option>
                <option value="menor">Menor Ataque</option>
            </Selector>

            <Selector name="Alfabetico" onClick={selectHandler}>
                <option value="" disabled selected hidden>
                    {" "}
                    Orden Alfabetico
                </option>
                <option value="asc">A,B,C...</option>
                <option value="des">Z,Y,X...</option>
            </Selector>

            <Selector name="Tipo" onClick={selectHandler}>
                <option value="" disabled selected hidden>
                    Tipos
                </option>
                {OptionTipos}
            </Selector>

            {/* <select name="" id=""></select> */}
        </Container>
    );
};
