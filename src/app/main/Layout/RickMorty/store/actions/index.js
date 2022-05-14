import * as types from "./types";
import * as api from "../api";

export const loadCharacters = url => async dispatch => {
    try {
        dispatch({
            type: types.CHARACTERS_LOAD_INIT,
        });

        const res = await api.load(url);

        if (res.status === 200) {
            dispatch({
                type: types.CHARACTERS_LOAD_SUCCEED,
                payload: res.data,
            });
        } else {
            dispatch({
                type: types.CHARACTERS_LOAD_FAILED,
            });
        }
    } catch (error) {
        console.error(error);
        dispatch({
            type: types.CHARACTERS_LOAD_FAILED,
        });
    }
};
