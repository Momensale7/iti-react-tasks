const INITAIL_VALUE={
    count:0,
}
export  function countReducer(state=INITAIL_VALUE,action){
    switch(action.type){
        case "CHANGE_COUNT":
            return {
                ...state,
                count:action.payload
            }
            default :
            return state
    }
   
}
// "logo":"أفلام",
//     "home":"الرئيسية",
//     "favourites":"المفضلة",
//     "languages":"اللغات",
//     "login":"تسجيل الدخول",
//     "register":"التسجيل",