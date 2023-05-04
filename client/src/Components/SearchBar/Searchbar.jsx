import React, { useState } from "react";
import { SearchButton, SearchInput } from "./SBStyles";

export const Searchbar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    function inputChangeHandler(event) {
        const searchInput = event.target.value.toLowerCase();
        setSearchValue(searchInput);
    }

    function searchValidation(searchValue) {
        //number Validation
        let NumPattern = /^\d+$/;
        let isValidNum = (NumPattern.test(searchValue) && searchValue >= 1 && searchValue <= 1010) || (NumPattern.test(searchValue) && searchValue >= 10001 && searchValue <= 10262);
        //string validation
        const stringPattern = /^[a-zA-Z]+$/;
        const isValidChar = stringPattern.test(searchValue); //.test metodo para probar regex
        console.log("String valido?" + isValidChar);
        console.log("id Valido?" + isValidNum);
        if (isValidChar || isValidNum) {
            props.onSearch(searchValue);
        
        } else {
            alert("Error al buscar Pokemon, revisa el Input. Debe ser un nombre de pokemon valido o un Id entre 1 y 1010 o para versiones MEGA entre 10001 y 10262");
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
