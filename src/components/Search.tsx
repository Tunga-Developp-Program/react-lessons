import React, { useState } from "react";

//  note : query value will be from the input
const search_url =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const SearchForm = (props: any) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(search_url + search);
    
    props.setApiUrl(search_url + search);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      Movies List
      <input
        type="text"
        placeholder="Search your fav Movie"
        onChange={handleSearch}
      />
<input type="submit" value="Search now" />
    </form>
  );
};

export default SearchForm;
