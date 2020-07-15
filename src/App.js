import React from 'react'
import {Switch, Route} from 'react-router'

import './App.sass'

import Posts from './components/Posts/Posts'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import Navbar from './components/Navbar/Navbar'

const App = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Posts}/>
                    <Route path="/" component={NotFoundPage}/>
                </Switch>
            </div>
        </>
    )
}

export default App
