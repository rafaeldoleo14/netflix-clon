import { ImSpinner9 } from "react-icons/im";
import React from "react";
import "./Loading.css";

export const Loading = () => {
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="fixed inset-0 bg-black opacity-75 z-50 flex items-center justify-center h-screen w-screen"
      >
        {/* <ImSpinner9 style={{ animation: 'spin 1s linear infinite' }} size={30} className="animate-spin h-12 w-12 text-white" /> */}
        <div id="loader" class="nfLoader"></div>
      </div>
    </>
  );
};
