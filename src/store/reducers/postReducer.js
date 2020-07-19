import * as actions from '../actions'

const initialState = {
    post: null,
    posts: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_POSTS:
            return {...state, posts: action.posts}
        case actions.GET_POST:
            return {...state, post: action.post}
        case actions.ADD_POST:
            return {...state, posts: null}
        case actions.EDIT_POST:
            return {...state, post: null}
        case actions.DELETE_POST:
            return {...state, post: null}
        default:
            return state
    }
}