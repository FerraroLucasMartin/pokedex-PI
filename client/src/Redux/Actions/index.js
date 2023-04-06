import axios from "axios"

export const GET_POKEPAGE = "GET_POKEPAGE";
export const GET_POKENAME = "GET_POKENAME";
export const GET_POKEID = "GET_POKEID";
export const POST_POKE = "POST_POKE"
export const GET_TYPES = "GET_TYPES"

export const getPokePage = async() => {
    let res= await axios("http://localhost:3001/pokemons")
    return dispatch({
        type: GET_POKEPAGE,
        payload: res.data
    })
}

export const getPokeName = async() => {
    let res= await axios("http://localhost:3001/pokemons")
    return dispatch({
        type: GET_POKENAME,
        payload: res.data
    })
}

export const getPokeId = async(id) => {
    let res= await axios(`http://localhost:3001/pokemons/${id}`)
    return dispatch({
        type: GET_POKEID,
        payload: res.data
    })
}

export const getTypes = async() => {
    let res= await axios("http://localhost:3001/types")
    return dispatch({
        type: GET_TYPES,
        payload: res.data
    })
}

export const postPoke = async(payload) => {
    let res= await axios.post("http://localhost:3001/pokemons")
    return dispatch({
        type: POST_POKE,
        payload
    })
}





