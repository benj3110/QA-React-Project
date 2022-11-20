import React from 'react';
import '../CSS/App.css';
import SearchBar from "../Components/SearchBar";
import MyRouter from '../Components/MyRouter'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <MyRouter />
      
    </div>
  );
}

export default App;
