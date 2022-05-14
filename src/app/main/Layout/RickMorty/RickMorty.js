import React, { useEffect, useState } from "react";
import LoadingScreen from "../../../pages/LoadingScreen/LoadingScreen";
import RickMortyCard from "./RickMortyCard/RickMortyCard";
import { loadCharacters } from "./store/actions";

const RickMorty = ({ dispatch, store }) => {
    const [searchText, setSearchText] = useState("");

    const { data, loading, loaded, next, prev } = store.rickMorty;

    useEffect(() => {
        if (loaded === false && loading === false) {
            dispatch(loadCharacters());
        }
    }, [dispatch, loading, loaded]);

    const filterData = () => {
        const filteredData = data.filter(character =>
            character.name.toLowerCase().includes(searchText.toLowerCase())
        );

        return filteredData;
    };

    const changePage = page => {
        if (page === null) {
            return;
        }
        dispatch(loadCharacters(page));
    };

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="rickMorty__component">
            <h2 className="header">Rick & Morty characters</h2>
            <div className="characters__actions_container">
                <button
                    className="button__prev"
                    onClick={() => changePage(prev)}
                >
                    Previous
                </button>
                <input
                    type="text"
                    onChange={e => setSearchText(e.target.value)}
                />
                <button
                    className="button__next"
                    onClick={() => changePage(next)}
                >
                    Next
                </button>
            </div>

            <div className="card__container">
                {filterData().map(character => {
                    return <RickMortyCard character={character} />;
                })}
            </div>
        </div>
    );
};

export default RickMorty;
