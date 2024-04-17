import React, { useContext } from "react";
import { Link } from "react-router-dom";  //nos importamos el hook de link del react router dom.
import { Context } from "../store/appContext";

export const CardEpisode = ({ episode }) => {
    const { actions } = useContext(Context);
    return (
        <div class="card col-2">
            <img src="https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1572526237662-KHRA3V0X1YKLVCU9E9K0/image-asset.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title">Name: {episode.name} </h5>
                <p className="card-text">Air Date: {episode.air_date}</p>
                <p className="card-text">Episode: {episode.episode}</p>
                <p className="card-text">Characters: {episode.characters.length}</p>
                <div className="d-flex justify-content-between" >
                    <button className="btn btn-outline-warning text-warning" onClick={() => actions.setFavorites(episode.name)} >❤</button>
                    <Link to={"details/episode/" + episode.id}> {/*en la carta le pasamos el param de character de esta manera: dentro de la propia ruta*/}
                        <button href="#" className="btn btn-primary">Details</button>
                    </Link>
                </div>



            </div>
        </div>
    )
};