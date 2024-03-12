import React, { useEffect, useState } from "react";
import Toprated from "../components/Toprated";

function RatedPage() {
  const [topRatedMovies, setTopRatedMovies] = useState({});

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  async function Toprated() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
    setTopRatedMovies(data);
  }

  const websiteURL = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";

  useEffect(() => {
    Toprated();
  }, []);

  return (
    <>
      <div className="bg-blue-500 ">
        <div className=" text-4xl bold py-3 my-5 bg-blue-800">
          <h1>TOP RATED</h1>
        </div>
        <div className="grid grid-cols-5 gap-4 ">
          {topRatedMovies.results &&
            topRatedMovies.results.map((ratedMovies) => (
              <div>
                <div>
                  <img
                    src={`${websiteURL}${ratedMovies.poster_path}`}
                    alt=""
                    className="w-full"
                  />
                </div>
                <h2>{ratedMovies.title} </h2>
                <div>{ratedMovies.release_date} </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default RatedPage;
