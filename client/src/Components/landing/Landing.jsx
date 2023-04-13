import React from "react";
import { FullImg, PokeParag, Container, StartButton } from "./LandingStyles.js";
import { Link } from "react-router-dom";

export default function Landing(){
    return(
        <Container>
            
            <FullImg src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDNiNjRhY2RmYWRhYzMzNjY3NjUwOTdjOWJiNzM5MzA1N2M0YTkwMSZjdD1n/UnuSuj53NcGyeTosZy/giphy.gif" alt="pokedex" />

            

           
            <PokeParag>
                ¡Bienvenidx a la Pokedex! 
                <br/>
                <br/>
                La enciclopedia virtual portátil que todo entrenador Pokémon lleva consigo.
            </PokeParag>

            <Link to="/home">
            <StartButton>Start</StartButton>
            </Link>

        </Container>
    )
}
