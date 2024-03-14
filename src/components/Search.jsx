import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [movies, setMovies] = useState({});

  const [searchKey, setSearchKey] = useState(null);

  async function searchMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchKey}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      }
    );
    const data = await response.json();

    setMovies(data);
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchKey);
    await searchMovies();
  };

  const websiteURL = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";

  return (
    <>
      <form onSubmit={handleSearch} className="mx-auto w-3/5 my-5">
        <input
          type="text"
          placeholder="Search for movies"
          className="border border-black w-full mb-3 p-3 rounded-full"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        {/* <input
          type="submit"
          value="Search for movies"
          placeholder=""
          className="bg-blue-700 text-white w-full p-3 cursor-pointer"
        /> */}
      </form>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {movies.results &&
          (movies.results.length === 0 ? (
            <div>Result not found</div>
          ) : (
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
            ))
          ))}
      </div>
    </>
  );
}

export default Search;
