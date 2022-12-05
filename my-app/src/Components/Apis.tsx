
import Axios, { AxiosResponse } from "axios";


export async function GetFilms (props:string): Promise<any | null> {
  let popular: string
  popular = props

  try {

    const popularData: AxiosResponse<any, any> = await Axios.get(`https://api.themoviedb.org/3/movie/${popular}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    return popularData.data.results

  } catch (err) {

    console.log(err)
    return null
    
  }


};