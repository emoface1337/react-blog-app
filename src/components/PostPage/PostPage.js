import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams, Link} from 'react-router-dom'
import Helmet from 'react-helmet'

import {getPost, deletePost} from '../../store/actions/postActions'
import AddComment from '../AddComment/AddComment'
import Comments from '../Comments/Comments'

const PostPage = ({getPost, deletePost, history, user, post}) => {
    const {id} = useParams()

    useEffect(() => {
        getPost(id)
    }, [getPost, id])

    if (!post) {
        return (<div><h1>Статья загружается...</h1></div>)
    }

    return (
        <>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <div>
                <h1>{post.title}</h1>
                <p className="text-muted">{post.author.name}</p>
                <p>{post.text}</p>

                {
                    user && user.id === post.author._id ? (
                            <div className="mb-3">
                                <button className="btn btn-danger mr-2" onClick={() => deletePost(id, history)}>Удалить
                                </button>
                                <Link className="btn btn-light mr-2" to={`/edit/${post._id}`}>Редактировать</Link>
                            </div>
                        )
                        : null
                }
                <AddComment/>
                <Comments comments={post.comments}/>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    post: state.postReducer.post
})

export default connect(mapStateToProps, {getPost, deletePost})(PostPage)