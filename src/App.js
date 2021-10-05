import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SearchGif from "./components/SearchGif/SearchGif";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchGif />
    </div>
  );
}

export default App;
