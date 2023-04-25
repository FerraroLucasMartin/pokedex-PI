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
    const [pagina, setpagina] = useState(1);
    const [filterFlag, setFilterFlag] = useState(false);
    const [menuFlag, setMenuFlag] = useState(false);
    const [searchData, setSearchData] = useState({});
    const [searchFlag, setSearchFlag] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        getTypes(dispatch);
    }, []);

    useEffect(() => {
        console.log(searchData);
    }, [searchData]);

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
        setSearchFlag(false);
    };

    async function onSearch(poke) {
        setSearchFlag(true);
        const dataType = typeof poke;
        console.log(dataType);
        if (dataType === "string") {
            try {
                let { data } = await axios(
                    `http://localhost:3001/pokemons?name=${poke}`
                );
                console.log(data);
                setSearchData(data);
                console.log(searchData);
            } catch (error) {
                console.error(error);
                window.alert("Error al buscar el Pokemon");
            }

            // useNavigate(`/detail/${searchData}`);
        } else if (dataType === "number") {
            try {
                let { data } = await axios(
                    `http://localhost:3001/pokemons/${poke}`
                );
                setSearchData(data);
            } catch (error) {
                console.error(error);
                window.alert("Error al buscar el Pokemon");
            }

            // useNavigate(`/detail/${searchData}`);
        } else window.alert("No se ha encontrado ningun Pokemon");
    }

    function conditionalRendering() {
        if (searchFlag) return <Detail poke={searchData} backHandler={backHandler}/>;
        else {
            return (<>     <Paginador
                mappingFiltersHandler={mappingFiltersHandler}
                pagina={pagina}
                pageChange={paginadorHandler}
                types={props.types}
                menuFlag={menuFlag}
            />
                <PokeCards
                    pagina={pagina}
                    getPokePage={getPokePage}
                    pokePage={props.pokePage}
                    filterFlag={filterFlag}
                    filterPage={props.orderFilterPoke}
                    menuFlagHandler={menuFlagHandler}
                    onSearch={onSearch}
                />;
            </>)
        }
    }

    return (
        <div>
            <HomeContainer>
                <Nav onSearch={onSearch} />
               

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
