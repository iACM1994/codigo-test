import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './headers.css'

class Headers extends Component{

    render(){

        return (
            <header className="header">
                <div className="nav-bg"></div>
                <div className="nav-header">
                    <div className="nav-logo">
                        <a href="/" className="logo-link">
                            <img className="white" src="https://www.codigo.co/img/ui/logo-codigo.svg" width="145" height="19" />
                            <img className="red" src="https://www.codigo.co/img/ui/logo-codigo-red.svg" width="145" height="19"></img>
                        </a>
                    </div>
                        <ul className="nav-list">
                            <li><Link to={'/work'}>Work</Link></li>
                            <li><Link to={'/'}>Solutions</Link></li>
                            <li><a>Services</a></li>
                            <li><a>About us</a></li>
                            <li><a>Blog</a></li>
                            <li className="req-btn"><span><p>Request a quote</p></span></li>
                        </ul>
                </div>
            </header>
        )
    }
}

export default Headers;