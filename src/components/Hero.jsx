import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [heroes, setHeroes] = useState({});

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  async function heroDisplay() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
    setHeroes(data);
  }

  const webSiteURL = "https://media.themoviedb.org/t/p/original";

  useEffect(() => {
    heroDisplay();
  }, []);

  return (
    <>
      <div
      // style={{ backgroundImage: url'{  `${webSiteURL}${hero.backdrop_path}` }'}}
      // className="bg-blue-500 "
      >
        <div className=" text-4xl bold py-3 my-5 bg-blue-800">
          <h1>Hero</h1>
        </div>
        <div className="grid grid-cols-5 gap-4 ">
          {heroes.results &&
            heroes.results.map((hero) => (
              <div>
                <div>
                  <Link to={`/movies/${hero.id}`}>
                    <img
                      src={`${websiteURL}${hero.backdrop_path}`}
                      alt=""
                      className="w-full"
                    />
                  </Link>
                </div>
                <h2>{hero.title} </h2>
                <div>{hero.overview} </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
