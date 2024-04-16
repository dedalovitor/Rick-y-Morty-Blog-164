import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/cardCharacter";
import { Context } from "../store/appContext";
import { CardEpisode } from "../component/cardEpisode";
import { CardLocation } from "../component/cardLocation";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5">

			<div className="container ">
				<h1>Characters</h1>
				<div className="row">
					{store.characters.map((character) => {
						return <CardCharacter key={character.id} character={character}></CardCharacter>


					})}
				</div>
			</div>



			<div className="container">
				<h1>Locations</h1>
				<div className="row">
					{store.locations.map((location) => {
						return <CardLocation key={location.id} location={location}></CardLocation>


					})}
				</div>
			</div>



			<div className="container">
				<h1>Episodes</h1>
				<div className="row">
					{store.episodes.map((episode) => {
						return <CardEpisode key={episode.id} episode={episode}></CardEpisode>


					})}
				</div>
			</div>


		</div>
	)

};

