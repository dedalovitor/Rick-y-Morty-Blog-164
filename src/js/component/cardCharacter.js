import React from "react";

export const CardCharacter = ({ character }) => {

    return (
        <div class="card col-2">
            <img src={character.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title">Name: {character.name} </h5>
                <p className="card-text">Status: {character.status}</p>
                <p className="card-text">Species: {character.species}</p>
                <p className="card-text">Gender: {character.gender}</p>
                <button href="#" className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    )
};