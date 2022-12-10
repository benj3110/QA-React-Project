import { useEffect, useState } from "react";
import { GetFilms } from "./Apis";
import FilmDataTypes from "../Interfaces/FilmDataTypes";
import "../CSS/FilmBox.css";

const FilmDisplay = () => {
	const popular: string = "popular";
	const [filmsData, setFilmsData] = useState<null | FilmDataTypes[]>(null);
	const images: {
		baseURL: string;
		posterSize: string[];
	} = {
		baseURL: "https://image.tmdb.org/t/p/",
		posterSize: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
	};

	//async function that await the API call in GetFilms
	useEffect(() => {
		const popularFilmsWrap: () => Promise<void> = async () => {
			const popularFilmsData: FilmDataTypes[] | null = await GetFilms(
				popular
			);
			setFilmsData(popularFilmsData);
		};

		popularFilmsWrap();
	}, []);

	return (
		<div className="allFilms_C">
			{filmsData?.map((filmData) => {
				return (
					<div key={filmData.poster_path} className="eachFilm_C">
						<p className="filmTitle_C">{filmData.title}</p>
						{/* <p>{filmData.overview}</p> */}
						<img
							className="filmPoster_C"
							src={
								images.baseURL +
								images.posterSize[2] +
								filmData.poster_path
							}
							alt=""
							onClick={() => console.log("click")}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default FilmDisplay;
