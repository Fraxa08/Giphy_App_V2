import React from "react";
import "./App.scss";
import Header from "./components/Header";
import SearchGif from "./utils/SearchGif";

function App() {
  return (
    <div>
      <Header />
      <SearchGif />
    </div>
  );
}

export default App;
