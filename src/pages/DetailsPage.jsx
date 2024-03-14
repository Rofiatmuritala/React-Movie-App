import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function DetailsPage() {
  const [details, setDetails] = useState({});
  const [reviews, setReviews] = useState({});

  const params = useParams();
  console.log(params.id);

  const url = `https://api.themoviedb.org/3/movie/${params.id}`;

  async function detailed() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });
    const data = await response.json();

    setDetails(data);
    console.log(data);
  }

  const websiteURL = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";

  const URL = `https://api.themoviedb.org/3/movie/${params.id}/reviews`;

  async function reviewed() {
    const response = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });
    const data = await response.json();

    setReviews(data);
    console.log("yes", data);
  }

  useEffect(() => {
    detailed();
    reviewed();
  }, [params.id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>DetailsPage</div>
      <YouTube videoId="negqGG1LQCE" />
      <div className=" ">
        <div className=" text-sm bold lg:text-4xl bold py-3 my-5 ">
          <h1>Movie Details</h1>
        </div>

        <div>
          <div>
            <img src={`${websiteURL}${details.poster_path} `} alt="" />
          </div>
          <div>{details.title}</div>
          <div>{details.release_date}</div>
          <div>{details.overview}</div>
        </div>

        <div className=" ">
          {reviews.results &&
            reviews.results.map((review) => (
              <div>
                <div>
                  <img
                    src={`${websiteURL}${review.poster_path}`}
                    alt=""
                    className="w-full"
                  />
                </div>
                <h2 className=" text-2xl bold pt-3 my-4 ">{review.author}</h2>
                <h2 className="">{review.content} </h2>

                <div>{review.author_details.name} </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
