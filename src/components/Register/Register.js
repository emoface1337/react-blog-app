import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

import {registerUser} from '../../store/actions/authActions'
import {clearErrors} from '../../store/actions/errorActions'

const Register = ({registerUser, clearErrors, user, errors, history}) => {
    // console.log(user)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const onSubmit = event => {
        event.preventDefault()
        registerUser({name, email, password, password2})
    }

    useEffect(() => {
        if (user) {
            history.push('/')
        }
    })

    useEffect(() => {
        clearErrors()
    }, [clearErrors])

    return (
        <div className="row">
            <form className="card p-3 mx-auto col-md-6" onSubmit={onSubmit}>
                <h3>Регистрация</h3>
                <div className="form-group">
                    <label htmlFor="name">
                        Имя
                    </label>
                    <input type="text" className="form-control" value={name}
                           onChange={event => setName(event.target.value)}
                           name="name"/>
                    {errors.name && (<div className="text-danger">{errors.name}</div>)}
                </div>
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
                <div className="form-group">
                    <label htmlFor="password2">
                        Повторите пароль
                    </label>
                    <input type="password" className="form-control" value={password2}
                           onChange={event => setPassword2(event.target.value)} name="password2"/>
                    {errors.password2 && (<div className="text-danger">{errors.password2}</div>)}
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Зарегистрироваться</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    errors: state.errorReducer
})

export default connect(mapStateToProps, {registerUser, clearErrors})(Register)