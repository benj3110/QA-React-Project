import Axios, { AxiosResponse } from "axios";
import FilmDataTypes from "../Interfaces/FilmDataTypes";

export async function GetFilms(props: string): Promise<FilmDataTypes[] | null> {
	let popular: string;
	popular = props;

	try {
		const filmData: AxiosResponse<any, any> = await Axios.get(
			`https://api.themoviedb.org/3/movie/${popular}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
		);
		console.log(filmData.data.results);
		return filmData.data.results;
	} catch (err) {
		console.log(err);
		return null;
	}
}
