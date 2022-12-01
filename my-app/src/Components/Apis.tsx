import React, { useState } from "react";
import Axios, { AxiosResponse } from "axios";


export function FilmGet(props:string) {

  const [filmGet, setFilmGet] = useState<AxiosResponse<any, any> | null>(null);

  try {
    Axios.get(`https://api.themoviedb.org/3/movie/${props}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setFilmGet(res.data)
      })
  } catch (err) {
    console.log(err)
  }

  return filmGet

};