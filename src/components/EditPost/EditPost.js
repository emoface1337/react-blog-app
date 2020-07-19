import React, {Component, createRef} from 'react'
import {connect} from 'react-redux'
import {editPost, getPost} from '../../store/actions/postActions'

class EditPost extends Component {
    constructor(props) {
        super(props)
        this.titleInput = createRef()
        this.textInput = createRef()
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getPost(id)
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.editPost(
            this.props.match.params.id,
            {
                title: this.titleInput.current.value,
                text: this.textInput.current.value
            },
            this.props.history)
    }

    render() {
        const { post } = this.props

        if(!post){
            return (<h1>Статья загружается...</h1>)
        }

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок</label>
                    <input type="text" defaultValue={post.title} className="form-control" name="title"
                           ref={this.titleInput}/>
                    <label htmlFor="text">Текст статьи</label>
                    <input type="text" defaultValue={post.text} className="form-control" name="text" ref={this.textInput}/>
                </div>
                <button type="submit" className="btn btn-primary">Редактировать</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    post: state.postReducer.post
})

export default connect(mapStateToProps, {editPost, getPost})(EditPost)