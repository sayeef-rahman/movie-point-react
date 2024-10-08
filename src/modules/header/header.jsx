import React, { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./styles.scss";
import useAuth from "../../hooks/useAuth/useAuth";
import axios from "axios";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import { ContentWrapper } from "../utility/components/contentWrapper/contentWrapper";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { LinkList } from "./date";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleSignout = () => {
    logout().then(() => {
      toast.success("Successfully logout!");
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  const [isAdmin] = useAdmin();

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <h1 className="text-red-700 font-extrabold text-3xl ">Movie Point</h1>
        </div>

        <ul className="menuItems">
          <div className="hidden lg:block md:block">
            <input
              className="border-b border-gray-300 mx-5 focus:border-gray-300 outline-none py-3 ps-2 lg:w-[350px] md:w-56 bg-black bg-opacity-0 text-white"
              type="text"
              placeholder="Search for a movie or tv show....."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
          </div>
          {LinkList?.map((link) => {
            return (
              <li
                key={link?.value}
                className="menuItem"
                onClick={() => navigationHandler(link?.value)}
              >
                <NavLink
                  to={link?.redirect}
                  className={({ isActive }) => (isActive ? "text-red-600" : "")}
                >
                  {link?.label}
                </NavLink>
              </li>
            );
          })}
          
          {user ? (
            <li className="menuItem">
              <Link>
                <button
                  onClick={handleSignout}
                  className="bg-gradient-to-r from-red-600 to-red-950 hover:from-pink-500 hover:to-yellow-500 block mx-auto text-white text-sm uppercase rounded shadow-md px-6 py-2"
                >
                  Sign Out
                </button>
              </Link>
            </li>
          ) : (
            <li className="menuItem">
              <Link to="/login">
                <button className="bg-gradient-to-r from-red-600 to-red-950 hover:from-pink-500 hover:to-yellow-500 block mx-auto text-white text-sm uppercase rounded shadow-md px-6 py-2">
                  Sign In
                </button>
              </Link>
            </li>
          )}
          <li className="searchMenu">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
