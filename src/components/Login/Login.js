import React, {Component} from 'react'
import {connect} from 'react-redux'

import {loginUser} from '../../store/actions/authActions'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.loginUser(this.state)
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.history.push("/")
        }
    }

    componentDidUpdate() {
        if (this.props.user) {
            this.props.history.push("/")
        }
    }

    render() {
        const {errors} = this.props
        return (
            <div className="row">
                <form className="card p-3 mx-auto col-md-6" onSubmit={this.onSubmit}>
                    <h3>Вход</h3>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChange}
                               name="email"/>
                        {errors.email && (<div className="text-danger">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            Пароль
                        </label>
                        <input type="password" className="form-control" value={this.state.password}
                               onChange={this.onChange} name="password"/>
                        {errors.password && (<div className="text-danger">{errors.password}</div>)}
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Войти</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    errors: state.errorReducer
})

export default connect(mapStateToProps, {loginUser})(Login)