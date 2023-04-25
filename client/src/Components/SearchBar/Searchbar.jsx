import React, { useState } from 'react'
import { SearchButton, SearchInput } from "./SBStyles";



export const Searchbar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  function inputChangeHandler(event) {
    const searchInput = event.target.value.toLowerCase()
    setSearchValue(event.target.value);
  }

  return (
    <div className="container">
        <SearchInput value={searchValue} onChange={inputChangeHandler} type="search"/>
        <SearchButton onClick={()=>props.onSearch(searchValue)} >Buscar</SearchButton>
    </div>
  )
}
