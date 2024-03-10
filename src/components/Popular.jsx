import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "./components/Navbar";

function Popular() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const [movies, setMovies] = useState({});
  const [moviesDetails, setMoviesDetails] = useState({});

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
  async function movieDetails() {
    const response = await fetch("https://api.themoviedb.org/3/movie/848538", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });
    const data = await response.json();

    console.log("Movie Details", data);
    setMoviesDetails(data);
  }

  const websiteURL = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";

  useEffect(() => {
    // movieDetails();
    popularMovies();
  }, []);

  // React-Movie-App

  return (
    <>
      <div className="mx-auto w-3/5 my-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for movies"
          className="border border-black w-full mb-3 p-3 rounded-full"
        />
        <input
          type="button"
          value="Search for movies"
          placeholder=""
          className="bg-blue-700 text-white w-full p-3 cursor-pointer"
        />
      </div>
      <div className="mx-auto w-[98%]">
        <h1 className="bg-blue-500 text-center w-full ">Popular</h1>
        <div>
          <Link to={"/popular"}>view all</Link>
          {""}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {movies.results &&
            movies.results.slice(0, 5).map((movie) => (
              <div>
                <div>
                  <img
                    src={`${websiteURL}${movie.poster_path}`}
                    alt=""
                    className="w-full"
                  />
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

export default Popular;
// hu40Uxp9WtpL34jv3zyWLb5zEVY;
// https://media.themoviedb.org/t/p/w300_and_h450_bestv2
