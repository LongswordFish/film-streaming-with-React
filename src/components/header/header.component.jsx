import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/fish-steaming-icon.png";
import SearchIcon from "../../assets/search-black-18dp.svg";

import './header.style.scss';

console.log(Logo);

const Header = ()=>(

    <div className="header navbar">
        <Link className="navbar-brand" to="/">
            <img src={Logo} alt="icon" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-wrapper">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/movies/listing">Movies&#38;TVs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/user/admin" >My FishStreaming</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-wrapper-2">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">{{user.name}}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/user/shoppingCart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/user/logout">Logout</a>                
                        </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/user/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/user/signIn">Sign In</Link>
                    </li>

                </ul>


                <form className="d-flex" action="/movie/search" method="POST">
                    <input className="form-control me-2" id="search" name="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">
                        <img src={SearchIcon} alt="" />
                    </button>
                </form>
            </div>

        </div>
    </div>
    
);

export default Header;