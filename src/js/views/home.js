import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="row d-flex">
				{store.characters.map((item) => {
					console.log(item);
					return <Card key={item.id} />
				})}
			</div>



			<h1>Planets</h1>
			<div className="row d-flex">
				<Card />  <Card />  <Card />
			</div>

		</div>
	)

};

