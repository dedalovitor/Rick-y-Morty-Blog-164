//utilizamos la misma vista de detalles para los 3 tipos de cartas
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Details = props => {
	const params = useParams();
	const [itemDetails, setItemDetails] = useState({}); //este state lo estamos utilizando para los diferentes tipos de cartas, el nombre lo ponemos genérico

	useEffect(() => {

		getDetails();
	}, []);
	//por limpieza de código esta función del fetch la declaramos fuera del useEffect. Este fetch como solo lo vamos a utilizar en la vista de details solo lo ponemos en esta página
	const getDetails = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/" + params.type + "/" + params.id);
		const data = await response.json();
		setItemDetails(data);
	}
	//la información que nos traemos con el fetch (dentro de "data") la debemos de guardar en un state, esto para acceder al nombre, etc

	return (
		<div className="container">
			<h1>Details {params.type}</h1>
			<p>Name: {itemDetails.name}</p>
			{itemDetails.species ? <p>Species: {itemDetails.species}</p> : null} {/*Para que se muestre la información según la carta ponemos una ternaria*/}
			{Object.keys(itemDetails).map((x, i) => {
				if (typeof itemDetails[x] != "object") {
					return (
						<p key={i}>{x}: {itemDetails[x]}</p>
					);
				}
			})}
			{/**de esta manera mapeamos los detalles de cada carta, debemos de procesar la info con el map teniendo en cuenta que estamos recorriendo un array, y para que no se rompa la página ahora le estamos diciendo que los objetos no los muestre, ya que dentro del array hay objetos */}
		</div>
	);
};

