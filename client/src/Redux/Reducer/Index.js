import * as allActions from "../Actions/index"

const initialState = {
    pokePage: [],
    allPoke:[],
    //guardar allPoke que van pasando por las paginas. 
    //Tal vez usarlos para los filtrados o para ahorrar peticiones?
    pokeDetail: {}, 
    createdPoke: [],
    types: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case allActions.GET_POKEPAGE:
            return{
                ...state,
                pokePage:action.payload,
                allPoke:[...state.allPoke,action.payload]
            }
            

        case allActions.GET_POKENAME:
            return{
                ...state,
                pokeDetail:action.payload
            }
            

        case allActions.GET_POKEID:
            return{
                ...state,
                pokeDetail:action.payload
            }
            

        case allActions.GET_TYPES:
            return{
                ...state,
                types:[action.payload]
            }
            

        case allActions.POST_POKE:
            return{
                ...state,
                createdPoke:[...state.createdPoke,action.payload]
            }
            

        default:
            return initialState;
            
    }
}

export default rootReducer;