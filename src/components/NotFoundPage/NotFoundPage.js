import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
    <div className="text-center">
        <h1>404 - Такой страницы не существует</h1>
        <h3><Link to="/">На главную</Link></h3>
    </div>
)

export default NotFoundPage