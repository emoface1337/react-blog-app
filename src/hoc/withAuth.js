import React, {Component} from 'react'

import {connect} from 'react-redux'

export default ChildComponent => {
    class WithAuth extends Component {
        componentDidMount() {
            this.toLogin()
        }

        componentDidUpdate() {
            this.toLogin()
        }

        toLogin = () => {
            if (!this.props.user) {
                this.props.history.push('/login')
            }
        }

        render() {
            return <ChildComponent {...this.props}/>
        }
    }

    const mapStateToProps = state => ({
        user: state.authReducer.user
    })

    return connect(mapStateToProps)(WithAuth)
}
