import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

import { Card } from "../Card/Card";
import { CardsContainer } from "./PokeCardsStyles";

import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { getPokePage } from "../../Redux/Actions";

function PokeCards(props) {
  const [loading, setloading] = useState(true);

  const pagina = props.pagina;
  const { pageArray } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    setloading(true);
    getPokePage(dispatch, pagina).then(() => setloading(false));
    props.resetMenuFlagHandler();
  }, [pagina]);

  const cardsMap = props.pokePage.map(function (element) {
    return (
      <Card
        id={element.id}
        key={`card-${element.id}`}
        pokeName={element.nombre}
        pokeImg={element.imagen}
        types={element.types}
        onSearch={props.onSearch}
      />
    );
  });

  const filterMap = props.orderFilterPoke.map(function (element) {
    return (
      <Card
        key={`card-${element.id}`}
        id={element.id}
        pokeName={element.nombre}
        pokeImg={element.imagen}
        types={element.types}
        onSearch={props.onSearch}
      />
    );
  });

  const Loader = (
    <div className='w-full h-full flex items-center justify-center flex-col'>
      <img
        src='https://miro.medium.com/v2/resize:fit:1000/1*8OlHww3sk8kiYEfEEIZIkw.gif'
        alt='Loading...'
      />
      <h3>Loading...</h3>
    </div>
  );

  //TODO in mobile adjust cars to container, loader div must be fullH too.
  return (
    <div className='flex flex-col gap-4 md:flex-row md:flex-wrap justify-center items-center w-full h-full p-4 bg-white border-2 border-black rounded-md overflow-y-scroll'>
      {loading ? Loader : props.filterFlag ? filterMap : cardsMap}
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    pagina: state.pagina,
    pokePage: state.pokePage,
    createdPoke: state.createdPoke,
    types: state.types,
    orderFilterPoke: state.orderFilterPoke,
  };
};

export const mapDispatchToProps = {
  getPokePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeCards);
