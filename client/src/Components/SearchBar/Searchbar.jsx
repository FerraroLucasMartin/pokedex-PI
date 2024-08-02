import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const Searchbar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  function inputChangeHandler(event) {
    const searchInput = event.target.value.toLowerCase();
    setSearchValue(searchInput);
  }

  function searchValidation(searchValue) {
    //number Validation
    let NumPattern = /^\d+$/;
    let isValidNum =
      (NumPattern.test(searchValue) &&
        searchValue >= 1 &&
        searchValue <= 1010) ||
      (NumPattern.test(searchValue) &&
        searchValue >= 10001 &&
        searchValue <= 10262);
    //string validation
    const stringPattern = /^[a-zA-Z]+$/;
    const isValidChar = stringPattern.test(searchValue); //.test metodo para probar regex
    console.log("String valido?" + isValidChar);
    console.log("id Valido?" + isValidNum);
    if (isValidChar || isValidNum) {
      props.onSearch(searchValue);
    } else {
      alert(
        "Error al buscar Pokemon, revisa el Input. Debe ser un nombre de pokemon valido o un Id entre 1 y 1010 o para versiones MEGA entre 10001 y 10262"
      );
    }
  }

  return (
    <div id='searchbar-container' className='flex flex-row w-full gap-2'>
      <input
        className='flex-1 py-2 px-4 border border-black rounded-md font-press-start text-xs leading-6 uppercase transition-all duration-200 ease-in-out focus:outline-none focus:shadow-yellow-300'
        value={searchValue}
        onChange={inputChangeHandler}
        type='search'
      />
      <button
        className='w-fit bg-yellow-400 border border-black rounded-md text-black font-pressStart text-xs py-2 px-2 uppercase text-shadow-sm transition-all duration-200 ease-in-out hover:bg-yellow-500 hover:text-white hover:cursor-pointer hover:scale-105'
        onClick={() => {
          searchValidation(searchValue);
        }}
      >
        <CiSearch className='w-8 h-8' />
      </button>
    </div>
  );
};
