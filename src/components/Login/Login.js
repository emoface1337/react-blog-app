import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

import {loginUser} from '../../store/actions/authActions'

const Login = ({loginUser, user, errors, history}) => {
    // console.log(user)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = event => {
        event.preventDefault()
        loginUser({email, password})
    }

    useEffect(() => {
        if (user) {
            history.push('/')
        }
    })

    return (
        <div className="row">
            <form className="card p-3 mx-auto col-md-6" onSubmit={onSubmit}>
                <h3>Вход</h3>
                <div className="form-group">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" className="form-control" value={email}
                           onChange={event => setEmail(event.target.value)}
                           name="email"/>
                    {errors.email && (<div className="text-danger">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Пароль
                    </label>
                    <input type="password" className="form-control" value={password}
                           onChange={event => setPassword(event.target.value)} name="password"/>
                    {errors.password && (<div className="text-danger">{errors.password}</div>)}
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Войти</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    errors: state.errorReducer
})

export default connect(mapStateToProps, {loginUser})(Login)