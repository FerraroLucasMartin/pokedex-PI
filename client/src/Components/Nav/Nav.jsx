//Styles
import styled from "styled-components";
import { TitleImg, NavDiv, CreateLink } from "./NavStyles";
import { SearchButton as CreateButton } from "../SearchBar/SBStyles";

import { Searchbar } from "../SearchBar/Searchbar";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getPokePage } from "../../Redux/Actions";

export default function Nav(props) {
    return (
        <NavDiv>
            <TitleImg src="https://data.whicdn.com/images/92472243/original.gif" />
            <Searchbar onSearch={props.onSearch} />

            <Link to={"/create"}>
                <CreateButton>Create Pokemon</CreateButton>
            </Link>

            {/* <NavLink to="/about" style={{ textDecoration: "inherit" }}>
            <H3>About</H3>
          </NavLink> */}
        </NavDiv>
    );
}
