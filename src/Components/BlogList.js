
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import { addFavoriteFirebase } from "../Helpers/FirebaseHelper";


function BlogList() {

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "2a4d79c57d6b96b0996d6ca104a61817";

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
  
    setMovies(results);
    setMovie(results[0]);
  };

  useEffect(() => {
      fetchMovies();
  }, []);

  const addFavorite = async (id, title, overview, imageURL) => {
    addFavoriteFirebase({objectToSave: {id, title, overview, imageURL}}, "My Favorite Movie Collection");
  }

  return(
      <div className='mainthing'>
          <div className="container mt-4 ">
              <div className="row">
                  {movies.map((movie) => (
                  <div key={movie.id} className="col-md-3 mb-2 movie-item">
                      <img
                          src={`${URL_IMAGE + movie.poster_path}`}
                          alt=""
                          height="50%"
                          width="100%"
                      />
                      <hr/>   
                      <div className="favorite-center">
                        <button className="btn btn-primary favorite-center-text" onClick={() =>addFavorite(movie.id, movie.title, movie.overview, `${URL_IMAGE + movie.poster_path}`)}>Add To Favorite</button>
                      </div>                     
                      <hr/>
                      <div className="info-text">
                        <h4 className="text-center"><u><b>{movie.title}</b></u></h4>
                        <h6 className="text-center">{movie.overview}</h6>                    
                     
                      </div>
                    
                  </div>
              ))}
              </div>
          </div>
      </div>
    )
  }

export {BlogList} ;
