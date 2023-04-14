import React from "react";
import { useState, useEffect } from "react";

import { SearchButton } from "../SearchBar/SBStyles";
import { Container, Selector } from "./PaginadorStyles";

import { useDispatch } from "react-redux";
import { filterType } from "../../Redux/Actions";
import { orderAtt, orderNam } from "../../Redux/Actions";

export const Paginador = (props) => {
    const [menuValor, setMenuValor] = useState({
        attOrder: "default",
        alfOrder: "default",
        TypeFilt: "default",
    });

    useEffect(() => {
        setMenuValor({
            attOrder: "default",
            alfOrder: "default",
            TypeFilt: "default",
        });
    }, [props.menuFlag]);

    const dispatch = useDispatch();

    const totalPags = Math.ceil(1279 / 12);
    const pageNumArray = [];
    const paginador = () => {
        for (let index = 1; index < totalPags; index++) {
            pageNumArray.push(<option value={index}>Pagina {index}</option>);
        }
    };
    paginador();

    const selectHandler = (event) => {
        const queryNum = event.target.value;
        props.pageChange(queryNum);
    };

    const typesArray = props.types[0] || [];
    const OptionTipos = typesArray.map((element) => {
        return <option value={element.nombre}>{element.nombre}</option>;
    });

    const filterHandler = (event) => {
        console.log(event.target.value);

        setMenuValor({
            ...menuValor,
            TypeFilt: event.target.value,
        });

        props.mappingHandler();
        return dispatch(filterType(event.target.value));
    };

    const orderHandler = (event) => {
        props.mappingHandler();
        if (event.target.name === "Alfabetico") {
            setMenuValor({
                ...menuValor,
                alfOrder: event.target.value,
            });
            return dispatch(orderNam(event.target.value));
        }
        if (event.target.name === "Ataque") {
            setMenuValor({
                ...menuValor,
                attOrder: event.target.value,
            });
            return dispatch(orderAtt(event.target.value));
        }
    };

    return (
        <Container>
            <Selector name="paginas"  onClick={selectHandler}>
                {pageNumArray}
            </Selector>

            <Selector name="Ataque" value={menuValor.attOrder} onChange={orderHandler}>
                <option value="default" disabled selected hidden>
                    Orden x Ataque
                </option>
                <option value="mayor">Mayor Ataque</option>
                <option value="menor">Menor Ataque</option>
            </Selector>

            <Selector name="Alfabetico" value={menuValor.alfOrder} onChange={orderHandler}>
                <option value="default" disabled selected hidden>
                    {" "}
                    Orden Alfabetico
                </option>
                <option value="asc">A,B,C...</option>
                <option value="des">Z,Y,X...</option>
            </Selector>

            <Selector name="Tipo" value={menuValor.TypeFilt} onChange={filterHandler}>
                <option value="default" disabled selected hidden>
                    Tipos
                </option>
                {OptionTipos}
            </Selector>
        </Container>
    );
};
