import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchPokemon = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto/")
    .then(res => console.log(res))
    .catch(err => dispatch({ type: FETCH_FAIL, payload: err.res }));
}