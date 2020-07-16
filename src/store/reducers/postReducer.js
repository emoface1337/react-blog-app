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
        default:
            return state

    }
}