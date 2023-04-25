import * as allActions from "../Actions/index"

const initialState = {
    pokePage: [],
    orderFilterPoke: [],
    pokeDetail: {},
    createdPoke: [],
    types: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case allActions.GET_POKEPAGE:
            return {
                ...state,
                pokePage: action.payload,
                orderFilterPoke: action.payload,
            }


        case allActions.GET_POKENAME:
            return {
                ...state,
                pokeDetail: action.payload
            }


        case allActions.GET_POKEID:
            return {
                ...state,
                pokeDetail: action.payload
            }


        case allActions.GET_TYPES:
            return {
                ...state,
                types: [action.payload]
            }


        case allActions.POST_POKE:
            return {
                ...state,
                createdPoke: [...state.createdPoke, action.payload]
            }

        case allActions.FILTER_TYPE:
            return {
                ...state,
                orderFilterPoke: state.pokePage.filter(
                    (poke) => {
                        for (let index = 0; index < poke.types.length; index++) {
                            const element = poke.types[index].type.name;
                            if (element === action.payload) return true;
                        }
                        return false;
                    }
                )
            }

        case allActions.FILTER_ORIGIN:
            console.log("llega hasta aca")

            if (action.payload === "database") {
               
                return {
                    ...state,
                    orderFilterPoke: [...state.createdPoke]
                }
            }
            else {
                return {
                    ...state,
                    orderFilterPoke: [...state.pokePage]
                }
            }



        case allActions.ORDER_ATT:
            let AttOrderFunction =
                action.payload === "menor"
                    ? (a, b) => {
                        return a.ataque > b.ataque ? 1 : -1;
                    }
                    : (a, b) => {
                        return a.ataque < b.ataque ? 1 : -1;
                    };
            let orderAtt = state.orderFilterPoke.sort(AttOrderFunction);
            return {
                ...state,
                orderFilterPoke: [...orderAtt],
            };

        case allActions.ORDER_NAM:
            let NamorderFunction =
                action.payload === "asc"
                    ? (a, b) => {
                        return a.nombre > b.nombre ? 1 : -1;
                    }
                    : (a, b) => {
                        return a.nombre < b.nombre ? 1 : -1;
                    };
            let orderNam = state.orderFilterPoke.sort(NamorderFunction)
            return {
                ...state,
                orderFilterPoke: [...orderNam]
            }


        default:
            return initialState;

    }
}
export default rootReducer;