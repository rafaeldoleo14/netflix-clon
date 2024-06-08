import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { SearchBar } from "../../netflixClon/components/SearchBar/SearchBar";
import { IoMdArrowDropdown } from "react-icons/io";
import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/slices/thunks";
import { useScroll } from "../../hooks/useScroll";
import { useHidden } from "../../hooks/useHidden";
import logo from "../../assets/img/netflix-logo1.png";
import { IoMenuSharp } from "react-icons/io5";

export const NavBar = () => {
  const { hiddenPanel, onHiddenPanel } = useHidden();
  const location = useLocation();
  const dispatch = useDispatch();
  const { photoURL } = useSelector((state) => state.auth);
  const { isFixed } = useScroll();
  const [isShowDashboard, setIsShowDashboard] = useState(false);

  const onLogout = () => {
    dispatch(startLogout());
  };

  const onDashboard = () => {
    setIsShowDashboard(!isShowDashboard);
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: `${isFixed ? "black" : ""}`,
          position: "fixed",
        }}
      >
        <div className="text-white nav-container">
          <div className="nav-content">
            <div className="menu-container">
              <IoMenuSharp onClick={onDashboard} size={35} />
            </div>

            <a href="/" className="text">
              <img src={logo} alt="logo" className="logo" />
            </a>

            <NavLink
              className={`nav-items ${
                location.pathname === "/" ? "text-white" : "text-gray-400"
              }`}
              to={"/"}
            >
              Peliculas
            </NavLink>

            <NavLink
              className={`nav-items ${
                location.pathname === "/series" ? "text-white" : "text-gray-400"
              }`}
              to={"/series"}
            >
              Series
            </NavLink>
          </div>

          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <SearchBar />

            <div className="profile-options" style={{ display: "flex" }}>
              <img
                onClick={onHiddenPanel}
                src={photoURL}
                alt=""
                className="rounded cursor-pointer"
              />

              <IoMdArrowDropdown
                onClick={onHiddenPanel}
                className="cursor-pointer"
                size={25}
                style={{
                  display: "inline-block",
                  transform: `${
                    hiddenPanel ? "rotate(180deg)" : "rotate(0deg)"
                  }`,
                }}
              />
            </div>
          </div>
        </div>
      </nav>
      <div
        className="dashboard"
        onClick={onDashboard}
        style={{ right: isShowDashboard ? "0px" : "1000px" }}
      >
        <div
          className="dashboard-content"
          onClick={(e) => e.stopPropagation()}
          style={{ left: isShowDashboard ? "0px" : "-1000px" }}
        ></div>
      </div>
    </>
  );
};

// animate__animated animate__fadeInDown
