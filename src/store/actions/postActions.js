import * as actions from './index'
import axios from 'axios'

export const getPosts = () => async dispatch => {
    const result = await axios.get('/api/posts')
    dispatch({type: actions.GET_POSTS, posts: result.data})
}

export const getPost = id => async dispatch => {
    const result = await axios.get(`/api/posts/${id}`)
    dispatch({type: actions.GET_POST, post: result.data})
}

export const addPost = (post, history) => async dispatch => {
    //todo: try catch block
    await axios.post(`/api/posts`, post)
    dispatch({type: actions.ADD_POST})
    history.push('/')
}

export const editPost = (id, post, history) => async dispatch => {
    //todo: try catch block
    await axios.put(`/api/posts/${id}`, post)
    dispatch({type: actions.EDIT_POST})
    history.push(`/post/${id}`)
}

export const deletePost = (id, history) => async dispatch => {
    //todo: try catch block
    await axios.delete(`/api/posts/${id}`)
    dispatch({type: actions.DELETE_POST})
    history.replace('/')
}