import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PopularPage() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const [movies, setMovies] = useState({});
  // const [moviesDetails, setMoviesDetails] = useState({});
  // const [searchMovies, setSearchMovies] = useState ("")

  async function popularMovies() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });
    const data = await response.json();

    // console.log("Movies", data);

    setMovies(data);
  }
  // 1096197;
  // async function movieDetails() {
  //   const response = await fetch("https://api.themoviedb.org/3/movie/848538", {
  //     headers: {
  //       Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_ACCESS_TOKEN}`,
  //       accept: "application/json",
  //     },
  //   });
  //   const data = await response.json();

  //   console.log("Movie Details", data);
  //   setMoviesDetails(data);
  // }

  const websiteURL = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";

  useEffect(() => {
    // movieDetails();
    popularMovies();
  }, []);

  // React-Movie-App

  // const searchMovies = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <div className="mx-auto w-[98%] bg-blue-800">
        <h1>This is the Movie Page</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {movies.results &&
            movies.results.map((movie) => (
              <div>
                <div>
                  <Link to={`/movies/${movie.id}`}>
                    <img
                      src={`${websiteURL}${movie.poster_path}`}
                      alt=""
                      className="w-full"
                    />
                  </Link>
                </div>
                <div className="text-2xl font-bold ">{movie.title} </div>
              </div>
            ))}
        </div>

        {/* <div>
          {moviesDetails.id.map((Detail) => (
            <div>
              <div className="text-2xl font-bold ">{Detail.title} </div>
              <div>{Detail.release_date} </div>
              <div>{Detail.overview} </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default PopularPage;
