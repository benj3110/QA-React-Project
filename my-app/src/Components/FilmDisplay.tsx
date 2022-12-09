import { useEffect, useState } from "react";
import { GetFilms } from "./Apis";
import FilmDataTypes from "../Interfaces/FilmDataTypes";
import filmDataObject from "../Interfaces/FilmDataTypes";

const FilmDisplay = () => {
	const popular: string = "popular";
	const [filmsData, setFilmsData] = useState<null | filmDataObject[]>(null);

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
				return <p>{[filmData.title, filmData.overview]}</p>;
			})}
		</div>
	);
};

export default FilmDisplay;
