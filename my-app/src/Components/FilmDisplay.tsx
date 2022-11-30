import React, { useEffect } from "react";
import Axios, {AxiosResponse} from "axios";


const FilmDisplay = () => {
  
  // useEffect(() => {
  //   const x = async () => { 
      
  //     const popular: AxiosResponse<any, any>| void = await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`).then(
  //       function (res) {
  //         console.log(res.data.results)
  //       }).catch(function (err) {
  //         console.log(err)
  //       })
       
      
  //   }

  //   x();
    
  // })




  return ( <div>
    

  </div> );
}
 
export default FilmDisplay;