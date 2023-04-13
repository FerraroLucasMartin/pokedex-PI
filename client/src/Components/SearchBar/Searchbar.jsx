import React from 'react'
import { SearchButton, SearchInput } from "./SBStyles";

export const Searchbar = () => {
  return (
    <div className="container">
        <SearchInput type="search" /*onChange={}*/ />
        <SearchButton /*onClick={}*/>Buscar</SearchButton>
    </div>
  )
}
