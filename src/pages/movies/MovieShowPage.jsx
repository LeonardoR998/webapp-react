import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieShowPage() {
  let { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movie/" + movieId;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.movie);
      });
  }, []);

  return (
    <div className="container pt-5 fs-1">
      <h1 className="my-5">Movie Detail</h1>
      <ul>{movie && <p> {movie.title}</p>}</ul>
    </div>
  );
}
