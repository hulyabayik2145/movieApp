import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `http://api.themoviedb.org/3/movie/${id}?api_key=2c34d329dcd4b7a5fe2fb65434f4f424`
  );
  return await res.json();
};
const page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  console.log(id, "id");
  console.log(movieDetail, "movieDetail");
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`http://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div className="my-3">
          {movieDetail?.release_date}-{movieDetail?.vote_average}
        </div>
        <div className="border w-32 p-2  hover:bg-white rounded-md text-center hover:text-black text-lg cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default page;
