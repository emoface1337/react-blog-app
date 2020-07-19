import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams, Link} from 'react-router-dom'

import {getPost, deletePost} from '../../store/actions/postActions'

const PostPage = ({getPost, deletePost, history, user, post}) => {
    const {id} = useParams()

    useEffect(() => {
        getPost(id)
    }, [getPost, id])

    if (!post) {
        return (<div><h1>Статья загружается...</h1></div>)
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p className="text-muted">{post.author.name}</p>
            <p>{post.text}</p>

            {
                user && user.id === post.author._id ? (
                        <div>
                            <button className="btn btn-danger mr-2" onClick={() => deletePost(id, history)}>Удалить</button>
                            <Link className="btn btn-light mr-2" to={`/edit/${post._id}`}>Редактировать</Link>
                        </div>
                    )
                    : null
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    post: state.postReducer.post
})

export default connect(mapStateToProps, {getPost, deletePost})(PostPage)