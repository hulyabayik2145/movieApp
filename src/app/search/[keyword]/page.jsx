import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=2c34d329dcd4b7a5fe2fb65434f4f424&query=${keyword}&include_adult=false`
  );
  const data = await res.json();
  console.log(data?.results, "data");

  return (
    <div>
      {
      !data?.results ? 
        <div>Aranılan şey bulunamadı</div>:
        
        <div className="flex items-center flex-wrap gap-3">
          {
            data?.results.map((dt,i)=> (
              <Movies key={i} dt={dt}/>
            ))
          }
         
    </div>
        }
</div>



export default Page;
