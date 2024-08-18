import { useDispatch, useSelector } from 'react-redux';
import { changeList } from '../Redux/Actions/ListAction';
import { Link } from 'react-router-dom';
import { changeCount } from '../Redux/Actions/countAction'; 

export default function Favourits() {
  const MyList = useSelector((state) => state.myList.list);
  const dispatch = useDispatch();
  const MyCount = useSelector((state) => state.myCount.count);


  const changeMyCount = (movie) => {
    const updatedList = MyList.filter(item => item.id !== movie.id);
    dispatch(changeList(updatedList));
    dispatch(changeCount(MyCount - 1)); 
  };

  
  const removeAllFavorites = () => {
    dispatch(changeList([]));
    dispatch(changeCount(0)); 
  };

  return (
    <div>
      <h2>Favorites</h2>
      <button onClick={removeAllFavorites} className="btn btn-danger">Remove All Favorites</button>
        {MyList.lenght==0 ? <p className='fs-2 text-center'>no movies yet in your fav</p>:null}
      <div className="row">
        {MyList.map((movie) => (
          <div key={movie.id} className="item col-md-4 p-3">
            <div className="movie-card card mb-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt={movie.original_title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text text-muted">Release Date: {movie.release_date}</p>
                <p className="card-text">
                  Rating: <span className="badge bg-success">{movie.vote_average}</span> ({movie.vote_count} votes)
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <Link to={'movie/' + movie.id} className="btn btn-primary">View Details</Link>
                  <i
                    onClick={() => changeMyCount(movie)} 
                    className={`fa-solid fa-heart fs-3 text-danger`}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
