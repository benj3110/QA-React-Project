import { useEffect, useState } from "react";
import { GetFilms } from "./Apis";
import FilmDataTypes from "../Interfaces/FilmDataTypes";

const FilmDisplay = () => {
	const popular: string = "popular";
	const [filmTitle, setFilmTitle] = useState<null | string[]>(null);

	//async function that await the API call in GetFilms
	useEffect(() => {
		const popularFilmsWrap: () => Promise<void> = async () => {
			const popularFilmsMapped: FilmDataTypes[] | null = await GetFilms(
				popular
			);

			if (popularFilmsMapped) {
				const title: string[] = popularFilmsMapped.map((filmData) => {
					return filmData.title;
				});
				setFilmTitle(title);
			}
		};

		popularFilmsWrap();
	}, []);

	useEffect(() => {
		//todo fix types within the object
		if (filmTitle) {
			console.log(filmTitle);
		}
	}, [filmTitle]);

	return (
		<div>
			<p>{filmTitle}</p>
		</div>
	);
};

export default FilmDisplay;
