import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from "react-redux"

import CharactersList from "./pages/list/characters-list"
import { CharacterDetails } from "./pages/details/character-details"

import CharactersAppBar from "./characters-app-bar"
import { store } from "./redux/store"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <main>
                <CharactersAppBar/>
                <Switch>
                    <Route path="/characters" component={CharactersList}/>
                    <Route path="/character/:id" component={CharacterDetails}/>
                    <Redirect from="*" to="/characters"/>
                </Switch>
            </main>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
