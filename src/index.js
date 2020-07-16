import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import js_cookie from 'js-cookie'
import jwt_decode from 'jwt-decode'

import './index.css'
import App from './App'

import store from './store'
import {logoutUser, setCurrentUser} from './store/actions/authActions'

const jwt = js_cookie.get('jwt')

if (jwt) {
    const decoded = jwt_decode(jwt)
    store.dispatch(setCurrentUser(decoded))

    const currentTime = Date.now() / 1000

    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser())
        window.location.href = '/login'
    }
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)