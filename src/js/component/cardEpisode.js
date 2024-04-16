import React from "react";

export const CardEpisode = ({ episode }) => {

    return (
        <div class="card col-2">
            <img src="https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1572526237662-KHRA3V0X1YKLVCU9E9K0/image-asset.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title">Name: {episode.name} </h5>
                <p className="card-text">Air Date: {episode.air_date}</p>
                <p className="card-text">Episode: {episode.episode}</p>
                <p className="card-text">Characters: {episode.characters.length}</p>
                <button href="#" className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    )
};