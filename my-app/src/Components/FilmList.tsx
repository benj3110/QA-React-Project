import { useEffect, useState } from "react";
import { GetFilms } from "./Apis";
import { useNavigate } from 'react-router-dom';
import FilmDataTypes from "../Interfaces/FilmDataTypes";
import "../CSS/FilmBox.css";
import FilmDisplay from "./FilmDisplay";

const FilmList = () => {
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

	const navigate = useNavigate();
	const handleFilmClick = (
		e: React.MouseEvent<HTMLImageElement, MouseEvent>,
		id: number,
		overview: string,
		posterPath: string,
		title: string
	) => {
		navigate(`/Film`)
	
		console.log(title)
	};

	return (
		<div className="allFilms_C">
			{filmsData?.map((filmData) => {
				return (
					<div key={filmData.id} className="eachFilm_C">
						<p className="filmTitle_C">{filmData.title}</p>
						<img
							className="filmPoster_C"
							src={
								images.baseURL +
								images.posterSize[2] +
								filmData.poster_path
							}
							alt=""
							onClick={(e) =>
								handleFilmClick(
									e,
									filmData.id,
									filmData.overview,
									filmData.poster_path,
									filmData.title
								)
							}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default FilmList;
