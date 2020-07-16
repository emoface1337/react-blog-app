import * as actions from './index'
import axios from 'axios'

export const getPosts = () => async dispatch => {
    const result = await axios.get('/api/posts')
    dispatch({type: actions.GET_POSTS, posts: result.data})
}

export const getPost = id => async dispatch => {
    const result = await axios.get(`/api/posts/${id}`)
    dispatch({type: actions.GET_POSTS, post: result.data})
}