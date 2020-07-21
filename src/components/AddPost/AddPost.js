import React, {useState} from 'react'
import {connect} from 'react-redux'
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
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Заголовок</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control"
                       name="title"/>
                <label htmlFor="text">Текст статьи</label>
                <input type="text" value={text} onChange={e => setText(e.target.value)} className="form-control"
                       name="text"/>
            </div>
            <button type="submit" className="btn btn-primary">Добавить</button>
        </form>
    )
}

export default withAuth(connect(null, {addPost})(AddPost))