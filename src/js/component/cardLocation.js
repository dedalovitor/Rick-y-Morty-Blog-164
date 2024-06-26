import React, { useContext } from "react";
import { Link } from "react-router-dom";  //nos importamos el hook de link del react router dom.
import { Context } from "../store/appContext";

export const CardLocation = ({ location }) => {
    const { actions } = useContext(Context);
    return (
        <div class="card col-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgvOYf1Ugs5VSB1lU909H4z4GqYiEN7-_0w&s" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title">Name: {location.name} </h5>
                <p className="card-text">Type: {location.type}</p>
                <p className="card-text">Dimension: {location.dimension}</p>
                <p className="card-text">Residents: {location.residents.length}</p>
                <div className="d-flex justify-content-between" >
                    <button className="btn btn-outline-warning text-warning" onClick={() => actions.setFavorites(location.name)} >❤</button>
                    <Link to={"details/location/" + location.id}> {/*en la carta le pasamos el param de character de esta manera: dentro de la propia ruta*/}
                        <button href="#" className="btn btn-primary">Details</button>
                    </Link>
                </div>


            </div>
        </div>
    )
};