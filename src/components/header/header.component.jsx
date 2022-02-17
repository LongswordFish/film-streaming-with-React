import React from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import Logo from "../../assets/fish-steaming-icon.png";
import SearchIcon from "../../assets/search-black-18dp.svg";
import CartIcon from "../cart-icon/Cart-icon.component";
import CartDropDown from "../cart-dropdown/Cart-dropdown.component";

import './header.style.scss';

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOut } from "../../redux/user/user.actions";

const Header = () => {

    const cartHidden = useSelector(selectCartHidden);
    const currentUser = useSelector(selectCurrentUser);

    //const dispatch=useDispatch();

    const handleLogout=dispatch=>{
        dispatch(signOut);
    }

    return (

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
                            <Link className="nav-link active" aria-current="page" to="/user/order/listing" >My FishStreaming</Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-wrapper-2">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        {
                            currentUser?
                            (
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/" onClick={handleLogout}>Sign Out</Link>
                                </li>           
                            )
                            :                                    
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/user/signUp">Register</Link>
                            </li>
                        }
                        {
                            currentUser?null
                            :                                    
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/user/signIn">Sign In</Link>
                            </li>
                        }


                        <li className="nav-item cart-icon">
                            <CartIcon />
                        </li>
                        {
                            cartHidden?null:<CartDropDown />
                        }
                        

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
};

export default Header;