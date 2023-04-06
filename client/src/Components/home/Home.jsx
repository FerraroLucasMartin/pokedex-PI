import React from "react";
import {PokeCards} from "./PokeCards"
import { Searchbar } from "./Searchbar";


export const Home = () => {
    return(
        <div className="container">
            img
            <Searchbar/>
            <PokeCards/>
        </div>
    )
}
