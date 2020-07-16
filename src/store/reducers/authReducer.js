import * as actions from '../actions'

const initialState = {
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_USER:
            return {user: action.user}

        case actions.LOGOUT_USER:
            return {user: null}
            
        default:
            return state
    }
}