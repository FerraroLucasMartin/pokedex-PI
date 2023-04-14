import React, { useEffect, useState } from "react";
import axios from "axios";

//Componentes
import PokeCards from "../PokeCards/PokeCards";
import { Searchbar } from "../SearchBar/Searchbar";
import Nav from "../Nav/Nav";
import { Paginador } from "../Paginador/Paginador";

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
    const [menuFlag, setMenuFlag] = useState(false)

    const dispatch = useDispatch();
    useEffect(() => {
        getTypes(dispatch);
    }, []);

    const paginadorHandler = (nuevaPag) => {
        setpagina(nuevaPag);
    };

    const menuFlagHandler = ()=>{
        setMenuFlag(!menuFlag)
    }

    const mappingHandler = () => {
        setFilterFlag(true);
    };

    return (
        <div>
            <HomeContainer>
                <Nav />
                <Paginador
                    mappingHandler={mappingHandler}
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
                />
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
