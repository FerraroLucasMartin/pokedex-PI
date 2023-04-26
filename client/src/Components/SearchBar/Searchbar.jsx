import React, { useState } from "react";
import { SearchButton, SearchInput } from "./SBStyles";

export const Searchbar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    function inputChangeHandler(event) {
        const searchInput = event.target.value.toLowerCase();
        setSearchValue(searchInput);
    }

    function searchValidation(searchValue) {
        const pattern = /^[a-zA-Z]+$/;
        const isValidChar = pattern.test(searchValue); //.test metodo para probar regex
        console.log(isValidChar);
        if (!isValidChar) {
            alert("Error al buscar Pokemon, revisa el Input.");
        } else {
            props.onSearch(searchValue);
        }
    }

    return (
        <div className="container">
            <SearchInput
                value={searchValue}
                onChange={inputChangeHandler}
                type="search"
            />
            <SearchButton onClick={()=>{searchValidation(searchValue)}}>Buscar</SearchButton>
        </div>
    );
};
