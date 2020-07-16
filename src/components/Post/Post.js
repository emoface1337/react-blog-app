import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({post}) => {
    const shortText = text => text.substring(0, 100) + "..."

    return (
        <div className="card">
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{shortText(post.text)}</p>
                <Link to={`/post/${post._id}`} className="btn btn-primary">Подробнее...</Link>
            </div>
        </div>
    )
}

export default Post