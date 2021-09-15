import React from 'react';
import logo from "../../logo.png";
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/lyrics">
                                Lyrics API
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav> 
        </NavbarContainer>
    )
}

export default Navbar;

// STYLED COMPONENTs STYLES
const NavbarContainer = styled.div`
    nav {
        background: var(--dark-re) !important;
    }

    img {
        width: 2.5rem;
        padding-left: 10px;
    }

    .nav-link {
        color: white !important;
        &:hover {
            background: var(--dark-tomato) !important;
        }
    }

    .active {
        border-bottom: 1px solid var(--dark-tomato);
    }
`;
