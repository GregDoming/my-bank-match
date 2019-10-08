import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>My Bank Match</h1>
                <p>A webpage for finding lenders for<br />
                commercial loans</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Lenders</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Clients</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Brokers</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('tools')}}>Tools</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
