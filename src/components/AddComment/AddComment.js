import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {withRouter} from 'react-router-dom'

import {addComment} from '../../store/actions/postActions'

class AddComment extends Component {

    state = {
        text: ''
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        const id = this.props.match.params.id
        this.props.addComment(id, this.state)
        this.setState({text: ''})
    }

    render() {
        const {user} = this.props
        const {text} = this.state

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
            <form onSubmit={this.onSubmit} className="mb-3">
                <div className="form-group">
                    <label htmlFor="text">
                        Комментарий
                    </label>
                    <textarea type="text" name="text" value={text} onChange={this.onChange}
                              className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Отправить комментарий</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user
})

export default withRouter(connect(mapStateToProps, {addComment})(AddComment))