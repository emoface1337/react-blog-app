import * as actions from '../actions/'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN_ERROR:
            return {...action.error}

        default:
            return state

    }

}