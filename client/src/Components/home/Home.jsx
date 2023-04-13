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

    const paginadorHandler = (nuevaPag) => {
        setpagina(nuevaPag);
    };

    return (
        <div>
            <HomeContainer>
                <Nav />
                <Paginador pagina={pagina} pageChange={paginadorHandler} types={props.types}/>
                <PokeCards
                    pagina={pagina}
                    getPokePage={getPokePage}
                    getTypes={getTypes}
                    pokePage={props.pokePage}
                />
            </HomeContainer>
        </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        pokePage: state.pokePage,
        allPoke: state.allPoke,
        createdPoke: state.createdPoke,
        types: state.types,
    };
};

export const mapDispatchToProps = {
    getPokePage,
    getTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
