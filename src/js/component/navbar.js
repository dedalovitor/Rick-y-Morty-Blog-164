import React, { useContext } from "react"; //necesitamos el { useContext } para importar el store
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; //esto lo necesitamos para importar el store

export const Navbar = () => {
	const { store, actions } = useContext(Context); //esto lo necesitamos para importar el store

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">Home</span>
			</Link>
			<div className="ml-auto me-5">
				<div className="dropdown">
					<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu">
						{
							store.favorites.length > 0 ? store.favorites.map((favorite, i) => {
								return <div className="row d-flex "><li className="dropdown-item" key={i}>{favorite} <p onClick={() => actions.setFavorites(favorite)}>🗑</p></li></div>;
							}) : <li className="dropdown-item">Empty</li>
						}
						{/*
						hacemos un map sobre el array favoritos para que se cree un li por cada favorito, necesitamos importar todo lo que necesitamos para usar el store
						- para modificar los favoritos dentro de actions en el flux necesitamos hacer un setFavorites
						*/}
					</ul>
				</div>
			</div>
		</nav>
	);
};
