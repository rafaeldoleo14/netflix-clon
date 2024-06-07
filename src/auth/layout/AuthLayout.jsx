import React from "react";
import { useLocation } from "react-router-dom";
import "./AuthLayout.css";
import authBackground from "../../assets/img/login-background.jpg";
import logo from "../../assets/img/netflix-logo1.png";

export const AuthLayout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <div className="bg-white w-full h-[100vh]">
        <img
          className="w-full h-full absolute object-cover auth-img"
          src={authBackground}
          alt=""
        />

        <div className="absolute p-5 z-10">
          <img src={logo} alt="logo" className="logo" />
          {/* <h1 className="text-red-600 text-5xl md:text-4xl cursor-pointer font-bold">
            NETFLIX
          </h1> */}
        </div>

        <div className="container-gradient">
          <div
            className="form-container animate__animated animate__fadeInDown"
            style={{
              height: `${
                location.pathname == "/auth/register" ? "600px" : "90%"
              }`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
