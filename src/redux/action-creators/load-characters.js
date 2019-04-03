import axios from "axios"
import * as actionCreators from "./index"

export const loadCharactersActionCreator = (query) => (dispatch, getState) => {
    const searchQuery = query ? `?name=${query}` : ''
    axios.get(`https://rickandmortyapi.com/api/character/${searchQuery}`)
        .then(response => {
            dispatch(actionCreators.charactersListLoaded(response.data.results))
        })
        .catch((err) => {
            dispatch(actionCreators.charactersListLoadFailed())
        })
}
