import axios from "axios"


export const GET_POKEPAGE = "GET_POKEPAGE";
export const GET_POKENAME = "GET_POKENAME";
export const GET_POKEID = "GET_POKEID";
export const POST_POKE = "POST_POKE"
export const GET_TYPES = "GET_TYPES"
export const ORDER_ATT = "ORDER_ATT"
export const ORDER_NAM = "ORDER_NAM"
export const FILTER_TYPE = "FILTER_TYPE"

export const getPokePage = async (dispatch, query) => {
    try {
        let res;

        if (query) {
            res = await axios(`http://localhost:3001/pokemons?page=${query}`)
        } else {
            res = await axios("http://localhost:3001/pokemons");
        }

        dispatch({
            type: GET_POKEPAGE,
            payload: res.data,
        });
    } catch (error) {
        console.log({ message: error.message });
    }
};

export const getPokeName = async (dispatch) => {
    try {
        let res = await axios("http://localhost:3001/pokemons")
        dispatch({
            type: GET_POKENAME,
            payload: res.data
        })
    } catch (error) {
        console.log({ message: error.message });
    }

}

export const getPokeId = async (id, dispatch) => {
    try {
        const res = await axios(`http://localhost:3001/pokemons/${id}`);
        dispatch({
            type: GET_POKEID,
            payload: res.data,
        });
    } catch (error) {
        console.log({ message: error.message });
    }
};

export const getTypes = async (dispatch) => {
    try {
        let res = await axios("http://localhost:3001/types")
        dispatch({
            type: GET_TYPES,
            payload: res.data
        })
    } catch (error) {
        console.log({ message: error.message })
    }

}

export const postPoke = async (payload, dispatch) => {
    try {
        let res = await axios.post("http://localhost:3001/pokemons", payload)
        dispatch({
            type: POST_POKE,
            payload: res.data
        })
    } catch (error) {
        console.log({ message: error.message })
    }

}

export function orderAtt(order) {
    return{
        type: ORDER_ATT,
        payload: order
    }
}

export function orderNam(order) {
    return{
        type: ORDER_NAM,
        payload: order
    }
}

export function filterType(tipo) {
    return{
        type: FILTER_TYPE,
        payload: tipo
    }
}






