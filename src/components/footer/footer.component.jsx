import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "../../assets/facebook-f-brands.svg";
import InsIcon from "../../assets/instagram-square-brands.svg";
import TwitterIcon from "../../assets/twitter-brands.svg";

import "./footer.style.scss";

const Footer = () => (
    <div className="footer">
        <div id="row-in-footer" className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                    <li>
                        <Link to="/movie/listing/movies" className="link-dark"  >Movies</Link>
                    </li>
                    <li>
                        <Link to="/movie/listing/TVs" className="link-dark">TVs</Link>
                    </li>
                    <li>
                        <Link to="/user/signIn" className="link-dark" >MyFishStreaming</Link>
                    </li>
                </ul>

            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contact Us</h5>
                <div className="icon-wrapper">
                    <a href="http://www.facebook.com" target="_blank">
                        <img src={FacebookIcon} alt="" />
                    </a>
                    <a href="http://www.instagram.com">
                        <img src={InsIcon} alt="" />
                    </a>
                    <a href="http://www.twitter.com">
                        <img src={TwitterIcon} alt="" />
                    </a>
                </div>

            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">© 2020 Copyright:</h5>
                <p > Jianchang (Robin) YU</p>
            </div>

        </div>
    </div>
);

export default Footer;