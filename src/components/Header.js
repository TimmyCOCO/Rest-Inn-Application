import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>

            <header className="p-3 bg-dark text-white" >
                <div className="container" >

                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <img src={'https://i.ibb.co/frxLqzs/logo.jpg'} style={imageStyle} alt="logo" />
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={fontStyle}>
                            <li><NavLink to="/" className="nav-link px-2 text-white">Home</NavLink></li>
                            <li><NavLink to="/PropertyList" className="nav-link px-2 text-white">Features</NavLink></li>

                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" style={searchBox} className="searchBox, form-control form-control-dark" placeholder="Search..." aria-labelledby="Search" />
                        </form>

                        <div className="dropdown" style={IconPosition}>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-sliders" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
                                </svg>
                            </button>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {/* <li><a href="/SignUp" className="dropdown-item" >Sign Up</a></li>
                                <li><a href="/SignIn" className="dropdown-item" >Log In</a></li> */}
                                <li><NavLink to="/SignUp" className="dropdown-item" >Sign Up</NavLink></li>
                                <li><NavLink to="/SignIn" className="dropdown-item" >Log In</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header >

            {/* Header will display all the time, and the page can be changed dynamic */}
            {props.children}
        </div >
    )
}

const imageStyle = {
    height: 60,
    width: 60,
    borderRadius: '50%',
    position: 'absolute'
}

const IconPosition = {
    position: 'absolute',
    right: 10,
    marginRight: 30
}

const fontStyle = {
    marginLeft: 150,
    fontSize: 25,
    fontWeight: 'bold',
}

const searchBox = {
    width: 150,
}

export default Header

