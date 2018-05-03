const GET_NAMES_REQUEST = 'GET_NAMES_REQUEST';
const GET_NAMES_SUCCESS = 'GET_NAMES_SUCCESS';

const addNames = () => {
    return (dispatch, getState) => {
        dispatch({
            type : GET_NAMES_REQUEST
        });
        fetch('https://swapi.co/api/people/')
            .then((resp) => resp.json())
            .then(data => dispatch({
                type : GET_NAMES_SUCCESS, 
                data
            }));
    };
}

export default addNames; 
