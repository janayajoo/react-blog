
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

function BlogPost() {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "2a4d79c57d6b96b0996d6ca104a61817";
  
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
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

    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies(searchKey);
    };

    useEffect(() => {
        fetchMovies();
    }, []);


    return ( 
        <div className='mainthing'>
            <form className="container mb-4 search-bar" onSubmit={searchMovies}>
                <input
                type="text"
                placeholder="Search Movie"
                onChange={(e) => setSearchKey(e.target.value)}
                />
                <button className="btn btn-primary">Search</button>
            </form>


            <div className="container mt-4 ">
                <div className="row">
                    {movies.map((movie) => (
                    <div key={movie.id} className="col-md-3 mb-2 movie-item">
                        <img
                            src={`${URL_IMAGE + movie.poster_path}`}
                            alt=""
                            height={700}
                            width="100%"
                        />
                        <hr/>
                        <div className="info-text">
                            <h3 className="text-center"><u><b>{movie.title}</b></u></h3>
                            <h6 className="text-center">{movie.overview}</h6>
                        </div>

                    </div>
                ))}
                </div>
            </div>
        </div>
      );
}

export {BlogPost} ;