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
					{store.characters.results ? store.characters.results.map((character) => {
						return <CardCharacter key={character.id} character={character}></CardCharacter>


					}) : "loading..."}
				</div>
				<button className="btn btn-primary" onClick={() => actions.getCharacters(store.characters.info.next)}>Load More</button> {/**Para que funcione la url del fetch debe de ser dinámica, ya que por cada página de characters cambia la url*/}
			</div>



			<div className="container">
				<h1>Locations</h1>
				<div className="row">
					{store.locations.results ? store.locations.results.map((location) => {
						return <CardLocation key={location.id} location={location}></CardLocation>


					}) : "Loading..."}
				</div>
				<button className="btn btn-primary" onClick={() => actions.getLocations(store.locations.info.next)}>Load More</button> {/**Para que funcione la url del fetch debe de ser dinámica, ya que por cada página de characters cambia la url*/}
			</div>



			<div className="container">
				<h1>Episodes</h1>
				<div className="row">
					{store.episodes.results ? store.episodes.results.map((episode) => {
						return <CardEpisode key={episode.id} episode={episode}></CardEpisode>
					}) : "Loading..."}
				</div>
				<button className="btn btn-primary" onClick={() => actions.getEpisodes(store.episodes.info.next)}>Load More</button> {/**Para que funcione la url del fetch debe de ser dinámica, ya que por cada página de characters cambia la url*/}
			</div>


		</div>
	)

};

