import React from "react"
import Grid from '@material-ui/core/Grid'

import { CharacterCard } from "./character-card"

import style from './character-list.css'
import { connect } from "react-redux"
import { loadCharactersActionCreator } from "../../redux/action-creators/load-characters"


class CharactersList extends React.Component {

    getQuery = (props) => props.location.pathname.replace('/characters', '').replace('/', '')

    componentDidMount() {
        if(this.props.characters.length < 1) {
            this.props.loadCharacters(this.getQuery(this.props))
        }
    }

    buildDetailsClickHandler = (character) => () => {
        this.props.history.push(`/character/${character.id}`)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.location.pathname !== this.props.location.pathname) {
            this.props.loadCharacters(this.getQuery(nextProps))
        }
    }

    render() {
        if (this.props.loadFailed) {
            return <h3>Error loading data from API</h3>
        }

        return (
            <div className={style.body}>
                <Grid container spacing={8}>
                    {this.props.characters.map((character) =>
                        <CharacterCard
                            key={character.id}
                            character={character}
                            handleDetailsClick={this.buildDetailsClickHandler(character)}
                        />
                    )}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    characters: state.characters,
    loadFailed: state.charactersLoadingFailed
})

const mapDispatchToProps = (dispatch) => ({
    loadCharacters: (query) => dispatch(loadCharactersActionCreator(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)
