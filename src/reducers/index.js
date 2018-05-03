const GET_NAMES_SUCCESS = 'GET_NAMES_SUCCESS';
const initialState = {
    names: [],
}

const names = (state=initialState, action) => {
    switch(action.type) {
        case GET_NAMES_SUCCESS:
            return { 
                ...state,
                names: [...action.data.results],
            };
        default:
            return state;
    };
}

export default names;
