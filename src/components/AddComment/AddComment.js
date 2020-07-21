import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link, useParams} from 'react-router-dom'

import {withRouter} from 'react-router-dom'

import {addComment} from '../../store/actions/postActions'

const AddComment = ({user, addComment}) => {

    const {id} = useParams()
    const [text, setText] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        addComment(id, {text: text})
        setText('')
    }

    if (!user) {
        return (
            <div>
                <p>Комментировать могут только зарегистрированные пользователи :(</p>
                <p>
                    <Link to="/login">Войти</Link>
                    {" или "}
                    <Link to="/register">Зарегистрироваться</Link>
                </p>
            </div>
        )
    }
    return (
        <form onSubmit={onSubmit} className="mb-3">
            <div className="form-group">
                <label htmlFor="text">
                    Комментарий
                </label>
                <textarea name="text" value={text} onChange={event => setText(event.target.value)}
                          className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Отправить комментарий</button>
        </form>
    )
}

const mapStateToProps = state => ({
    user: state.authReducer.user
})

export default withRouter(connect(mapStateToProps, {addComment})(AddComment))