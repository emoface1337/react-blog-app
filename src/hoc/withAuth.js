import React, {useEffect} from 'react'

import {connect} from 'react-redux'

export default ChildComponent => {
    const WithAuth = ({user, history}) => {
        useEffect(() => {
            toLogin()
        })

        const toLogin = () => {
            if (!user) {
                history.push('/login')
            }
        }
        return <ChildComponent user={user} history={history}/>
    }

    const mapStateToProps = state => ({
        user: state.authReducer.user
    })

    return connect(mapStateToProps)(WithAuth)
}
