import React, { useContext } from "react";
import { Link } from "react-router-dom";  //nos importamos el hook de link del react router dom.
import { Context } from "../store/appContext";

export const CardCharacter = ({ character }) => {
    const { store, actions } = useContext(Context);
    return (
        <div class="card col-2">
            <img src={character.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title">Name: {character.name} </h5>
                <p className="card-text">Status: {character.status}</p>
                <p className="card-text">Species: {character.species}</p>
                <p className="card-text">Gender: {character.gender}</p>
                {/** 
                 * debemos de encapsular el botón de cada carta dentro del hook link para que funcione su direccionamiento
                 */}
                <div className="d-flex justify-content-between" >
                    <button className={store.favorites.includes(character.name) ? "btn btn-warning" : "btn btn-outline-warning text-warning"} onClick={() => actions.setFavorites(character.name)} >❤</button>
                    <Link to={"details/character/" + character.id}> {/*en la carta le pasamos el param de character de esta manera: dentro de la propia ruta*/}
                        <button href="#" className="btn btn-primary">Details</button>
                    </Link>
                </div>

            </div>
        </div>
    )
};