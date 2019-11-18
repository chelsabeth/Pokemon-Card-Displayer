import React, { useEffect } from "react";

function PokemonCard(props) {
    const { data } = props;
    useEffect(() => {
        console.log("coming from pokemoncard.js: ", data)
    }, [data])
    return (
        <div className="card-container">
            {props.data.map(data => (
                <div key={data.id} className="poke-card">
                <h2>{data.name}</h2>
                <img classname="poke-pic" src={data.url} alt="picture of pokemon"></img>
                </div>
            ))}
        </div>
    )
}

export default PokemonCard;