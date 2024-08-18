const INITIAL_values={
    movies:[]
}

export default function moviesReducer(state=INITIAL_values,action){
    switch(action.type){
        case "GET_MOVIES":
            return {
                ...state,
                movies:action.payload
            }
            default :
            return state
            
    }
}