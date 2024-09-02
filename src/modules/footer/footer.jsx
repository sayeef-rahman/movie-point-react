import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./styles.scss";
import { Link } from "react-router-dom";
import { ContentWrapper } from "../utility/components/contentWrapper/contentWrapper";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="socialIcons">
          <Link to={"https://www.facebook.com/ashraf.mahmud.444"}>
            <span className="icon">
              <FaFacebookF />
            </span>
          </Link>
          <Link to={"https://www.instagram.com/_ashraf_mahmud_/"}>
            <span className="icon">
              <FaInstagram />
            </span>
          </Link>
          <Link to={"https://www.twitter.com/"}>
            <span className="icon">
              <FaTwitter />
            </span>
          </Link>
          <Link to={"https://www.linkedin.com/in/ashraful-islam-04804a283/"}>
            <span className="icon">
              <FaLinkedin />
            </span>
          </Link>
        </div>

        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
      </ContentWrapper>
      <p className="text-center border-t pt-6 lg:mx-64 mx-8 text-sm lg:mb-0 mb-4">
        ©{new Date().getFullYear()} Copyright All right reserved by <a href="">@Sayeef Rahman</a>
      </p>
    </footer>
  );
};

export default Footer;
