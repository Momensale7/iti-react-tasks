/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieCart.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeList } from '../Redux/Actions/ListAction';
import { changeCount } from '../Redux/Actions/countAction';

export default function MovieCart({ movie }) {
  const dispatch = useDispatch();
  const MyList = useSelector((state) => state.myList.list);
  const MyCount = useSelector((state) => state.myCount.count);
  
  const [isHearted, setIsHearted] = useState(false);

  useEffect(() => {
    const savedHeartedState = localStorage.getItem(`heart-${movie.id}`);
    if (savedHeartedState !== null) {
      setIsHearted(JSON.parse(savedHeartedState));
    }
  }, [movie.id]);

  const toggleFavorite = () => {
    const isMovieInList = MyList.some(item => item.id === movie.id);
    if (isHearted && isMovieInList) {
      dispatch(changeList(MyList.filter(item => item.id !== movie.id)));
    } else if (!isHearted && !isMovieInList) {
      dispatch(changeList([...MyList, movie]));
    }
    setIsHearted(!isHearted);
    localStorage.setItem(`heart-${movie.id}`, JSON.stringify(!isHearted));
  };

  const changeMyCount = () => {
    const newCount = isHearted ? MyCount - 1 : MyCount + 1;
    dispatch(changeCount(newCount));
    toggleFavorite();
  };

  return (
    <div className="item col-md-4 p-3">
      <div className="movie-card card mb-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          className="card-img-top"
          alt={movie?.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie?.title}</h5>
          <p className="card-text text-muted">Release Date: {movie?.release_date}</p>
          <p className="card-text">
            Rating: <span className="badge bg-success">{movie?.vote_average}</span> ({movie?.vote_count} votes)
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <Link to={'movie/' + movie.id} className="btn btn-primary">View Details</Link>
            <i
              onClick={changeMyCount}
              className={`fa-solid fa-heart fs-3 ${isHearted ? 'text-danger' : ''}`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
