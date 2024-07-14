import React, { KeyboardEvent, useEffect, useState } from "react";
import { ContentWrapper } from "../utility/components/contentWrapper";
import { HeaderShow } from "./header.types";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const [show, setShow] = useState<HeaderShow>(HeaderShow.TOP);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow(HeaderShow.HIDE);
      } else {
        setShow(HeaderShow.SHOW);
      }
    } else {
      setShow(HeaderShow.TOP);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleSearchQuery = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query?.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const navigationHandler = (type: string) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <h1 className="text-red-700 font-extrabold text-3xl ">FilmHoliday</h1>
        </div>

        <ul className="menuItems">
          <div className="hidden lg:block md:block">
            <input
              className="border-b border-gray-300 mx-5 focus:border-gray-300 outline-none py-3 ps-2 lg:w-[350px] md:w-56 bg-black bg-opacity-0 text-white"
              type="text"
              placeholder="Search for a movie or tv show....."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleSearchQuery}
            />
          </div>
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            <NavLink
              to="/explore/movie"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              Movies
            </NavLink>
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            <NavLink
              to="/explore/tv"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              TV Shows
            </NavLink>
          </li>
          <li className="menuItem">
            <NavLink
              to="/subscription"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              Subscription
            </NavLink>
          </li>
          {user && (
            <li className="menuItem">
              <Link
                to={
                  isAdmin ? "/dashboard/adminhome" : "/dashboard/favoritevideos"
                }
              >
                Dashboard
              </Link>
            </li>
          )}
          {user && (
            <li className="menuItem">
              <Link to="/dashboard/userprofile">
                {user && (
                  <Avatar
                    alt="photo"
                    title={userProfile?.name}
                    src={
                      userProfile?.photo
                        ? userProfile?.photo
                        : "https://cdn5.vectorstock.com/i/1000x1000/37/29/male-user-circle-icon-black-avatar-icon-user-vector-22753729.jpg"
                    }
                  />
                )}
              </Link>
            </li>
          )}
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
                onKeyUp={handleSearchQuery}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};
