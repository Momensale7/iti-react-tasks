import axios from "axios"

export const getMovies=(lang,page)=>(disPatch)=>{
return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=${lang}&page=${page}`).then((res)=>{
    console.log(res);
    
    disPatch({
        type:"GET_MOVIES",
        payload:res.data.results
    })
}).catch((err)=>console.log(err));
}
