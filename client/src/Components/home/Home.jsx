import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Componentes
import PokeCards from "../PokeCards/PokeCards";
import { Searchbar } from "../SearchBar/Searchbar";
import Nav from "../Nav/Nav";
import { Paginador } from "../Paginador/Paginador";
import Detail from "../detail/Detail";

//Redux
import {
    getPokePage,
    getPokeName,
    getPokeId,
    getTypes,
} from "../../Redux/Actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

//Estilos

import { HomeContainer } from "./HomeStyles";

export function Home(props) {


    const [pagina, setpagina] = useState(() => {
        const pagGuardada = localStorage.getItem("pagActual");
        return pagGuardada ? parseInt(pagGuardada) : 1;
    });

    
    const [filterFlag, setFilterFlag] = useState(false);

    //resetea filters y orders al cambiar pags.
    const [menuFlag, setMenuFlag] = useState(false);

    //guarda la data buscada
    const [searchData, setSearchData] = useState({});

    //avisa que se esta haciendo una busqueda
    const [searchFlag, setSearchFlag] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        getTypes(dispatch);
    }, []);

    //localStorage es un almacenamiento web en el browser del usuario. formato key:value
    useEffect(() => {
        localStorage.setItem("pagActual", pagina);
        console.log("esta es la pagina guardada: " + localStorage.getItem("pagActual"))
    }, [pagina]);

    const paginadorHandler = (nuevaPag) => {
        setpagina(nuevaPag);
    };

    const menuFlagHandler = () => {
        setMenuFlag(!menuFlag);
    };

    const mappingFiltersHandler = () => {
        setFilterFlag(true);
    };

    const backHandler = () => {
        setSearchData({});
        setSearchFlag(false);
    };

    async function onSearch(poke, cardClick) {
        if (cardClick) {
            console.log(poke)
            const pokeObj = props.orderFilterPoke.find(
                (obj) => obj.nombre.toLowerCase() === poke
            );
            console.log(pokeObj)
            setSearchData(pokeObj);
            console.log("card Clicked, showing details of " + pokeObj.nombre);
            setSearchFlag(true);
            return;
        }

        const dataType = typeof poke;
        console.log("on searh: " + dataType);
        if (dataType === "string") {
            try {
                let { data } = await axios(`/pokemons?name=${poke}`);
                console.log(data);
                if (data) {
                    setSearchData(data);
                    setSearchFlag(true);
                }
            } catch (error) {
                console.error(error);
                window.alert("No se ha encontrado ningun Pokemon con ese nombre");
            }

            // useNavigate(`/detail/${searchData}`);
        } else if (dataType === "number") {
            try {
                let { data } = await axios(`/pokemons/${poke}`);
                if (data) {
                    setSearchData(data);
                    setSearchFlag(true);
                }
            } catch (error) {
                console.error(error);
                window.alert("No se ha encontrado ningun Pokemon con ese Id");
            }

            // useNavigate(`/detail/${searchData}`);
        } else window.alert("No se ha encontrado ningun Pokemon");
    }

    function conditionalRendering() {
        if (searchFlag)
            return <Detail poke={searchData} backHandler={backHandler} />;
        else {
            return (
                <>
                    {" "}
                    <PokeCards
                        pagina={pagina}
                        getPokePage={getPokePage}
                        pokePage={props.pokePage}
                        filterFlag={filterFlag}
                        filterPage={props.orderFilterPoke}
                        menuFlagHandler={menuFlagHandler}
                        onSearch={onSearch}
                    />
                </>
            );
        }
    }

    return (
        <div>
            <HomeContainer>
                <Nav onSearch={onSearch} />
                <Paginador
                        mappingFiltersHandler={mappingFiltersHandler}
                        pagina={pagina}
                        pageChange={paginadorHandler}
                        types={props.types}
                        menuFlag={menuFlag}
                    />

                {conditionalRendering()}
            </HomeContainer>
        </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        pokePage: state.pokePage,
        createdPoke: state.createdPoke,
        types: state.types,
        orderFilterPoke: state.orderFilterPoke,
    };
};

export const mapDispatchToProps = {
    getPokePage,
    getTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
