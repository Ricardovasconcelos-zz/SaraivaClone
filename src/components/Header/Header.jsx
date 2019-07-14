import React from 'react'

import './Header.css'
import { Navbar } from 'react-bootstrap'

const Header = () => (
    <div className="header">
         <Navbar  className="nav">
            <div className="container">
                <Navbar.Brand href="#home" className="logo">
                    <img
                        alt=""
                        src="https://image.flaticon.com/icons/png/128/167/167756.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    <h4 className="nav-title">2UBooks</h4>
                </Navbar.Brand>

                <a href="https://github.com/Ricardovasconcelos"className="gitName">Github.com/Ricardovasconcelos</a>
                
            </div>
        </Navbar>

    </div>
)

export default Header