
const initialState = {
    characters: [],
    charactersLoadingFailed: false
}

export const reducer = (oldStore = initialState, action) => {

    if(action.type === 'CHARACTERS_LIST_LOADED') {
        return {
            characters: action.characters,
            charactersLoadingFailed: false
        }
    }

    if(action.type === 'CHARACTERS_LIST_LOAD_FAILED') {
        return {
            characters: [],
            charactersLoadingFailed: true
        }
    }

    return oldStore
}
