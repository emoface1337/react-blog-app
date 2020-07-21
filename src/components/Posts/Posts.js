import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'

import {getPosts} from '../../store/actions/postActions'

import Post from '../Post/Post'

const Posts = ({getPosts, posts}) => {

    useEffect(() => {
        getPosts()
    }, [getPosts])

    // console.log(posts)

    if (!posts) {
        return <h2>Статьи загружаются...</h2>
    }

    return (
        <div>
            <Helmet>
                <title>Главная страница</title>
            </Helmet>

            {
                posts.map(post => {
                    return <Post key={post._id} post={post}/>
                })
            }
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.postReducer.posts
})

export default connect(mapStateToProps, {getPosts})(Posts)
