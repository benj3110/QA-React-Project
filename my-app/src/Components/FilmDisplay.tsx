import { useEffect, useState } from "react";
import { GetFilms } from "./Apis"


const FilmDisplay = () => {
  
  const popular:string = "popular";
  const [popularFilms, setPopularFilms] = useState<null| Array<Object>>(null)


  //async function that await the API call in GetFilms 
  useEffect(()=>{
    const popularFilmsWrap: () => Promise<void> = async () => {
      setPopularFilms(await GetFilms(popular))
    
    }
    popularFilmsWrap()
  },[])


  useEffect(()=>{
    //todo fix types within the object
    //console.log(popularFilms ? popularFilms[0]['original_title'] : "nothing")

  },[popularFilms]);


    





  return ( <div>
    <p>
      {/* {popularFilms ? popularFilms[0].toString(): "null"} */}
    </p>

  </div> );
}
 
export default FilmDisplay;