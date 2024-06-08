import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext/SearchContext";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import "./searchBar.css";

export const SearchBar = () => {
  const { searchInput, setSearchInput } = useContext(SearchContext);
  const navigate = useNavigate();
  const [onSearch, setOnSearch] = useState(false);

  const onInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    if (e.target.value !== "") {
      navigate("/search");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {!onSearch ? (
        <IoSearch
          className="icon"
          size={25}
          onClick={() => setOnSearch(true)}
        />
      ) : (
        <div></div>
      )}

      <div className={`search-container ${onSearch ? "show" : ""}`}>
        <IoSearch size={25} />
        <input
          id="input"
          onChange={onInput}
          value={searchInput}
          type="text"
          placeholder="Buscar"
        />
        <IoCloseSharp
          className="delete-icon"
          size={25}
          onClick={() => setOnSearch(false)}
        />
      </div>
    </>
  );
};
