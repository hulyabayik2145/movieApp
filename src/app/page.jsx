import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const rest = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=2c34d329dcd4b7a5fe2fb65434f4f424`,
    { next: { revlidate: 10000 } }
  );

  const data = await rest.json();
  console.log(data, "data");
  console.log(searchParams.genre, "aaa");
  return (
    <div className="flex items-center justify-center flex-wrap gap-3 ">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
