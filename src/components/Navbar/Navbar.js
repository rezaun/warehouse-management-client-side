import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import CustomLink from '../Pages/Shared/CustomLink/CustomLink';
import logo from '../Assets/Images/logo/logo.png'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CustomLink className="nav-link active" aria-current="page" to="/">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" to="/blog">Blog</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" to="/contact">Pricing</CustomLink>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Navbar text with an inline element
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar