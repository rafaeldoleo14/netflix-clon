import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { SearchBar } from "../../netflixClon/components/SearchBar/SearchBar";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/slices/thunks";
import { useScroll } from "../../hooks/useScroll";
import { useHidden } from "../../hooks/useHidden";
import logo from "../../assets/img/netflix-logo1.png";

export const NavBar = () => {
  const { hidden, onHidden, hiddenPanel, onHiddenPanel } = useHidden();
  const location = useLocation();
  const dispatch = useDispatch();
  const { displayName, photoURL } = useSelector((state) => state.auth);
  const { isFixed } = useScroll();

  const onLogout = () => {
    dispatch(startLogout());
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
            <a href="/" className="text">
              <img src={logo} alt="logo" className="logo" />
            </a>

            <NavLink
              className={`${
                location.pathname === "/" ? "text-white" : "text-gray-400"
              }`}
              to={"/"}
            >
              Peliculas
            </NavLink>

            <NavLink
              className={`${
                location.pathname === "/series" ? "text-white" : "text-gray-400"
              }`}
              to={"/series"}
            >
              Series
            </NavLink>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <SearchBar />

            <div style={{ display: "flex" }}>
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
    </>
  );
};

// animate__animated animate__fadeInDown
