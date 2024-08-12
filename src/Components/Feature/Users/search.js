import React, { useState } from "react";
import Searchstyle from "./search.module.css";

const Search = ({ onsearch, onclear, setLoading }) => {
  const [data, setData] = useState("");

  const changehandler = (e) => {
    setData(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    setLoading(true); // Trigger loading state
    onsearch(data);
    setData("");
  };

  return (
    <div className={Searchstyle.container}>
      <form className={Searchstyle.form} onSubmit={submithandler}>
        <input
          className={Searchstyle.search}
          value={data}
          onChange={changehandler}
          type="text"
          placeholder="Search here ..."
        />
        <button type="submit" className={Searchstyle.button}>
          Search
        </button>
        <button
          type="button"
          onClick={onclear}
          className={Searchstyle.clrbutton}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Search;
