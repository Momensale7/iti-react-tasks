const INITAIL_VALUE={
    
    list:[]
}
export  function listReducer(state=INITAIL_VALUE,action){
    switch(action.type){
            case "CHANGE_LIST":
                return {
                    ...state,
                    list:action.payload

                }
            default :
            return state
    }
 
}