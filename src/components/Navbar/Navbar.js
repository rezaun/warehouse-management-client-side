import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import CustomLink from '../Pages/Shared/CustomLink/CustomLink';
import logo from '../Assets/Images/logo/logo.png'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { FaUserAlt } from 'react-icons/fa';

function Navbar() {
    const [user] = useAuthState(auth);
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
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className='loginUser px-2 pt-2'>{user?.email}</li>
                            <li class="nav-item">
                                {user ? (
                                     <button className='btn btn-warning' onClick={() => signOut(auth)}> <FaUserAlt className='mr-2'/>  Logout</button>
                                ) : (
                                     <CustomLink class="nav-link active" aria-current="page" to='/login'>Login</CustomLink>
                                )}
                               
                            </li>
                                                   
                        </ul>      
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar