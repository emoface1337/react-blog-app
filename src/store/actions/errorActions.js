import * as actions from './index'

export const error = (error) =>({
    type: actions.LOGIN_ERROR,
    error
})

