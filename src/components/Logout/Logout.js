import React, {Component} from 'react'
import {connect} from 'react-redux'

import {logoutUser} from '../../store/actions/authActions'

class Logout extends Component {
    componentDidMount() {
        this.props.logoutUser()
        this.props.history.replace('/login')
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default connect(null, {logoutUser})(Logout)