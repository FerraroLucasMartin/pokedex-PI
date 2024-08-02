//Styles
import styled from "styled-components";
import Paginador from "../Paginador/Paginador";
import { Searchbar } from "../SearchBar/Searchbar";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getPokePage } from "../../Redux/Actions";

const Lens = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd; /* Light gray */
  /* Add a slight shadow for depth */
  box-shadow: 0 0 0 1px #000000, 0 0 0 4px #ffffff, 0 0 0 5px #000000; /* Second outer border */
  padding: 3px; /* Space for black border and light blue center */
  background-color: lightblue;
`;

export default function Nav(props) {
  return (
    <div
      id='navContainer'
      className='flex flex-col md:flex-row justify- items-center bg-red-500 border-gray-700 w-full h-fit gap-6 py-5'
    >
      <div
        id='PokedexLens'
        className='flex justify-between items-center w-fit h-10 gap-8'
      >
        <Lens />

        <div id='PokedexLens_buttons' className='flex gap-2'>
          <div
            id='Lens_color-red'
            className='w-5 h-5 rounded-full bg-red-500 border border-black'
          ></div>
          <div
            id='Lens_color-yellow'
            className='w-5 h-5 rounded-full bg-yellow-500 border border-black'
          ></div>
          <div
            id='Lens_color-green'
            className='w-5 h-5 rounded-full bg-green-500 border border-black'
          ></div>
        </div>
      </div>

      <Searchbar onSearch={props.onSearch} />

      <Paginador
        mappingFiltersHandler={props.mappingFiltersHandler}
        resetMenuFlag={props.resetMenuFlag}
      />
      {/*  <Link to={"/create"}>
        <CreateButton>Create Pokemon</CreateButton>
      </Link> */}

      {/* <NavLink to="/about" style={{ textDecoration: "inherit" }}>
            <H3>About</H3>
          </NavLink> */}
    </div>
  );
}
