import { useContext, useEffect, useState } from "react"
import MovieCart from "../MovieCart/MovieCart";
import "./Home.css"
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../Redux/Actions/movieAction";
import { LangContext } from "../contexts/langContext";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Home() {
   
   const MyMovies =useSelector((state)=>state.myMovies.movies)
   const dispatch = useDispatch()
   const [page,setPage]=useState(1)
   const [filteredMovies, setFilteredMovies] = useState([]);
   const { lang } = useContext(LangContext);  
   const[homeLang,setHomeLang]=useState(lang) 
   const [hasMore,setHasMore]=useState(true)

   // *dispath actions
   const [isloading,setisLoading]=useState(false)
   const getmovies=async(lang,page)=>{
      setisLoading(true)
      await dispatch(getMovies(lang,page))
      setisLoading(false)
      setHomeLang(lang)

   }
   const filterbyName =(e)=>{
      console.log(e.target.value);
      const filtered=MyMovies.filter((movie)=>movie.original_title.includes(e.target.value))
      setFilteredMovies(filtered)
      setHasMore(MyMovies.length>0)
   }
   useEffect(()=>{
      getmovies(lang,page)
   },[lang,page])

   useEffect(()=>{
      setFilteredMovies(MyMovies)
   },[homeLang])

   useEffect(() => {
      setFilteredMovies([...filteredMovies,...MyMovies]);
      
   }, [MyMovies,lang]);
   const fetchMoreData=()=>{
      setPage(page+1)
   }
   if (isloading) {
     return <Loader/>
   }
  return (
    <div className="pt-5">
       <h1 className="movie-heading mb-2">Movies  {homeLang}</h1>
       <div className="mb-3">
    <label htmlFor="search" className="form-label">search</label>
    <input type="search" onChange={(e)=>filterbyName(e)} className="form-control" id="search" placeholder="search by movie name"/>
  </div>
    <div className="row g-3">
      {<InfiniteScroll
      dataLength={filteredMovies.length}
      hasMore={hasMore}
      next={fetchMoreData}
      loader={<Loader/>}
      endMessage={<p>all Movies</p>}
      className="row">

      {filteredMovies?.map((movie,index)=>{
         return <MovieCart movie={movie} key={index}/>
      })}</InfiniteScroll>}
      
      </div>
    </div>
  )
}
