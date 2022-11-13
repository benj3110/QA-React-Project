import React, {useState} from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  
  

  const handleSearch= (e:any) => {
    e.preventDefault()
    const SearchSubmit = (searchInput)
    console.log(SearchSubmit)
  }

  return (
    <form onSubmit = {handleSearch}>
      <input type="text" value = {searchInput} onChange={e => setSearchInput(e.target.value)}/>
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
