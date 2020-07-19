import React, {useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import {editPost, getPost} from '../../store/actions/postActions'
import {useParams} from 'react-router'

const EditPost = ({post, editPost, getPost, history}) => {

    const {id} = useParams()

    const titleRefValue = useRef()
    const textRefValue = useRef()

    useEffect(() => {
        getPost(id)
    }, [getPost, id])

    const onSubmit = e => {
        e.preventDefault()
        editPost(
            id,
            {
                title: titleRefValue.current.value,
                text: textRefValue.current.value
            },
            history)
    }

    if (!post) {
        return (<h1>Статья загружается...</h1>)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Заголовок</label>
                <input type="text" defaultValue={post.title} className="form-control" name="title"
                       ref={titleRefValue}/>
                <label htmlFor="text">Текст статьи</label>
                <input type="text" defaultValue={post.text} className="form-control" name="text"
                       ref={textRefValue}/>
            </div>
            <button type="submit" className="btn btn-primary">Редактировать</button>
        </form>
    )
}

const mapStateToProps = state => ({
    post: state.postReducer.post
})

export default connect(mapStateToProps, {editPost, getPost})(EditPost)