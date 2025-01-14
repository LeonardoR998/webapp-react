import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movie/";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);

  return (
    <div className="container pt-5">
      <h1>Movie List</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4  my-2" key={movie.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title fs-3 mb-4">{movie.title}</h5>
                <Link to={"/movies/" + movie.id} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
