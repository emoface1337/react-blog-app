import React from 'react'
import {Switch, Route} from 'react-router'

import './App.sass'

import Posts from './components/Posts/Posts'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Register from './components/Register/Register'
import PostPage from './components/PostPage/PostPage'
import AddPost from './components/AddPost/AddPost'
import EditPost from './components/EditPost/EditPost'

const App = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Posts}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/post/:id" component={PostPage}/>
                    <Route exact path="/add" component={AddPost}/>
                    <Route exact path="/edit/:id" component={EditPost}/>
                    <Route path="/" component={NotFoundPage}/>
                </Switch>
            </div>
        </>
    )
}

export default App
