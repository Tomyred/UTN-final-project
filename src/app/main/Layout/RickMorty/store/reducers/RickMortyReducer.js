const initialState = {
    data: [],
    next: null,
    prev: null,
    loading: false,
    loaded: false,
    loadingError: false,
};

export default function rickMortyReducer(state = initialState, action) {
    switch (action.type) {
        case "CHARACTERS_LOAD_INIT":
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
            };
        case "CHARACTERS_LOAD_SUCCEED":
            return {
                ...state,
                data: action.payload.results,
                next: action.payload.info.next,
                prev: action.payload.info.prev,
                loading: false,
                loaded: true,
                loadingError: false,
            };
        case "CHARACTERS_LOAD_FAILED":
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError: true,
            };
        default:
            return state;
    }
}
