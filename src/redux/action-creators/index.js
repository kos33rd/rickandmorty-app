

export const charactersListLoaded = (characters) => ({
    type: 'CHARACTERS_LIST_LOADED',
    characters
})

export const charactersListLoadFailed = () => ({
    type: 'CHARACTERS_LIST_LOAD_FAILED'
})
