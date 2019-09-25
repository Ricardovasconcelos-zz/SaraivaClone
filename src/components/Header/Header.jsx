import React from 'react'

import './Header.css'
import { Navbar } from 'react-bootstrap'
import { FiBookOpen } from "react-icons/fi";
const Header = () => (
    <div className="header">
        <Navbar className="nav">
            <div className="container">
                
                <Navbar.Brand href="#home" className="logo">
                    
                    <h4 className="nav-title">
                    <FiBookOpen size={30} className="Car-icon"/>SARAIVA
                        </h4>
                </Navbar.Brand>

                <a href="https://github.com/Ricardovasconcelos" className="gitName">Github.com/Ricardovasconcelos</a>

            </div>
        </Navbar>

    </div>
)

export default Header