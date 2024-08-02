import React from "react";
import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { filterType, filterOrigin, getPagina } from "../../Redux/Actions";
import { orderAtt, orderNam, resetFilters } from "../../Redux/Actions";

const Paginador = (props) => {
  const [menuValor, setMenuValor] = useState({
    attOrder: "default",
    alfOrder: "default",
    TypeFilt: "default",
    origin: "default",
    paginador: 1,
  });

  // devuelve los valores a default al re-renderizar
  useEffect(() => {
    setMenuValor({
      attOrder: "default",
      alfOrder: "default",
      TypeFilt: "default",
      origin: "default",
      paginador: props.pagina,
    });
  }, [props.resetMenuFlag]);

  useEffect(() => {
    setMenuValor({ ...menuValor, paginador: props.pagina });
  }, [props.pagina]);

  const dispatch = useDispatch();

  //Paginador
  const totalPags = Math.ceil(1280 / 12);
  const pageNumArray = [];
  const paginador = () => {
    for (let index = 1; index < totalPags; index++) {
      pageNumArray.push(<option value={index}>Pagina {index}</option>);
    }
  };
  paginador();

  const selectPageHandler = (event) => {
    const { name, selectedIndex } = event.target;

    if (name === "prev" && menuValor.paginador > 1) {
      props.getPagina(menuValor.paginador - 1);
      return;
    }

    if (name === "next" && menuValor.paginador < totalPags) {
      props.getPagina(menuValor.paginador + 1);
      return;
    }

    if (name === "paginas") {
      const NumPag = selectedIndex + 1;
      props.getPagina(NumPag);
    }
  };

  //Tipos options del select
  const typesArray = props.types[0] || [];
  const OptionTipos = typesArray.map((element) => {
    return (
      <option key={"tipo: " + element.nombre} value={element.nombre}>
        {element.nombre}
      </option>
    );
  });

  const filterHandler = (event) => {
    console.log(event.target.value);

    const filtro = event.target.name;
    if (filtro === "tipo") {
      setMenuValor({
        ...menuValor,
        TypeFilt: event.target.value,
      });

      props.mappingFiltersHandler();
      return dispatch(filterType(event.target.value));
    }

    if (filtro === "origin") {
      setMenuValor({
        ...menuValor,
        origin: event.target.value,
      });

      props.mappingFiltersHandler();
      return dispatch(filterOrigin(event.target.value));
    }
  };

  const orderHandler = (event) => {
    props.mappingFiltersHandler();
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
    <section className='flex gap-2 justify-between md:flex w-full'>
      <button
        name='prev'
        className='flex justify-center bg-yellow-400 border border-black rounded-md text-black font-pressStart text-xs p-3 uppercase shadow-sm transition-all duration-200 ease-in-out hover:bg-yellow-500 hover:text-white hover:cursor-pointer hover:scale-105'
        onClick={selectPageHandler}
      >
        {" "}
        <GrPrevious className='size-6 pointer-events-none' />
      </button>

      <select
        name='paginas'
        className='flex-1 bg-sky-300 rounded-md text-white border-2 border-black p-2 font-pressStart text-xs uppercase'
        value={menuValor.paginador}
        onChange={selectPageHandler}
      >
        {pageNumArray}
      </select>

      <button
        name='next'
        className='flex justify-center bg-yellow-400 border border-black rounded-md text-black font-pressStart text-xs p-3 uppercase shadow-sm transition-all duration-200 ease-in-out hover:bg-yellow-500 hover:text-white hover:cursor-pointer hover:scale-105'
        onClick={selectPageHandler}
      >
        <GrNext className='size-6 pointer-events-none' />
      </button>

      {/*  <Selector
        name='Ataque'
        value={menuValor.attOrder}
        onChange={orderHandler}
      >
        <option value='default' disabled selected hidden>
          Orden x Ataque
        </option>
        <option value='mayor'>Mayor Ataque</option>
        <option value='menor'>Menor Ataque</option>
      </Selector>

      <Selector
        name='Alfabetico'
        value={menuValor.alfOrder}
        onChange={orderHandler}
      >
        <option value='default' disabled selected hidden>
          {" "}
          Orden Alfabetico
        </option>
        <option value='asc'>A,B,C...</option>
        <option value='des'>Z,Y,X...</option>
      </Selector>

      <Selector name='tipo' value={menuValor.TypeFilt} onChange={filterHandler}>
        <option value='default' disabled selected hidden>
          Tipos
        </option>
        {OptionTipos}
      </Selector>
      <Selector name='origin' value={menuValor.origin} onChange={filterHandler}>
        <option value='default' disabled selected hidden>
          Filtrar x Origen
        </option>
        <option value='api'>API</option>
        <option value='database'>DB</option>
      </Selector>

      <ResetButton
        onClick={() => {
          setMenuValor({
            attOrder: "default",
            alfOrder: "default",
            TypeFilt: "default",
            origin: "default",
          });
          dispatch(resetFilters());
        }}
      >
        Reset Filters
      </ResetButton> */}
    </section>
  );
};

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
  getPagina,
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginador);
