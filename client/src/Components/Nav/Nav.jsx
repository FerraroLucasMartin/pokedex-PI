//Styles
import styled from "styled-components";
import { TitleImg,NavDiv } from "./NavStyles";


import { Searchbar } from "../SearchBar/Searchbar";

import { connect } from "react-redux";
import { getPokePage } from "../../Redux/Actions";


export default function Nav(props) {
    return (
        <NavDiv>
            
            <TitleImg src="https://data.whicdn.com/images/92472243/original.gif" />
            <Searchbar />

            {/* <NavLink to="/about" style={{ textDecoration: "inherit" }}>
            <H3>About</H3>
          </NavLink> */}
        </NavDiv>
    );
}
