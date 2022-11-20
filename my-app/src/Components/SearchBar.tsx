import React, {useState} from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  
  

  const handleSearch= (e:React.FormEvent<HTMLElement>): void => {
    e.preventDefault()
    const SearchSubmit = (searchInput)
    console.log(SearchSubmit)
  }

  return (
    <div className="SearchBarClass">
      <form onSubmit = {handleSearch}>
        <input type="text" value = {searchInput} onChange={e => setSearchInput(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
