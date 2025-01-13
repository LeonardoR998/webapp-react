import { useState, useEffect } from "react";

export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/movie";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);

  return (
    <div className="container pt-5">
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}> {movie.title} </li>
        ))}
      </ul>
    </div>
  );
}
