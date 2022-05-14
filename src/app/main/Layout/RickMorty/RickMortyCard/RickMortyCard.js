import React from "react";

const RickMortyCard = ({
    character: { image, name, status, species, location, origin },
}) => {
    return (
        <div className="character__card">
            <img src={image} alt="" />
            <div className="character__info">
                <div className="section">
                    <h2>{name}</h2>
                    <span>
                        <span
                            style={{ color: status !== "Alive" ? "red" : "" }}
                        >
                            {status}{" "}
                        </span>
                        - <span>{species}</span>
                    </span>
                </div>
                <div className="section">
                    <span className="grey__text">Last known location:</span>
                    <span> {location.name} </span>
                </div>
                <div className="section">
                    <span className="grey__text">First seen in:</span>
                    <span>{origin.name} </span>
                </div>
            </div>
        </div>
    );
};

export default RickMortyCard;
