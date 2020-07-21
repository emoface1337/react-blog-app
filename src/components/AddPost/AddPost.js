import React, {useState} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'

import {addPost} from '../../store/actions/postActions'

import withAuth from '../../hoc/withAuth'

const AddPost = ({addPost, history}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        addPost({title, text}, history)
    }

    return (
        <>
            <Helmet>
                <title>Добавление статьи</title>
            </Helmet>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Заголовок</label>
                <input type="text" value={title} onChange={event => setTitle(event.target.value)} className="form-control"
                       name="title"/>
                <label htmlFor="text">Текст статьи</label>
                <textarea value={text} onChange={event => setText(event.target.value)} className="form-control"
                       name="text"/>
            </div>
            <button type="submit" className="btn btn-primary">Добавить</button>
        </form>
            </>
    )
}

export default withAuth(connect(null, {addPost})(AddPost))