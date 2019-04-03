import { applyMiddleware, compose, createStore } from 'redux'
import { reducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        composeWithDevTools()
    )
)
