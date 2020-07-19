import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addPost} from '../../store/actions/postActions'

class AddPost extends Component {

    state = {
        title: '',
        text: ''
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.addPost(this.state, this.props.history)
    }

    render() {
        const {title, text} = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок</label>
                    <input type="text" value={title} onChange={this.onChange} className="form-control" name="title"/>
                    <label htmlFor="text">Текст статьи</label>
                    <input type="text" value={text} onChange={this.onChange} className="form-control" name="text"/>
                </div>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
        )
    }
}

export default connect(null, {addPost})(AddPost)