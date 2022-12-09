import { useEffect, useState } from "react";
import { GetFilms } from "./Apis";
import FilmDataTypes from "../Interfaces/FilmDataTypes";
import filmDataObject from "../Interfaces/FilmDataTypes";

const FilmDisplay = () => {
	const popular: string = "popular";
	const [filmsData, setFilmsData] = useState<null | filmDataObject[]>(null);
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

	useEffect(() => {
		if (filmsData) {
			console.log(filmsData);
		}
	}, [filmsData]);

	return (
		<div>
			{filmsData?.map((filmData) => {
				return (
					<div>
						<p>{filmData.title}</p>
						<p>{filmData.overview}</p>
						<img
							src={
								images.baseURL+images.posterSize[2]+
								filmData.poster_path
							}
							alt=""
						/>
					</div>
				);
			})}
		</div>
	);
};

export default FilmDisplay;
