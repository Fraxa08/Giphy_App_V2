import React, { useState } from "react";
import axios from "axios";
import GifTile from "./GifTile";


function SearchGif() {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);

  async function getGifs() {
    const result = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=SSDP5H8axlmLkYZr9xLqlw6OdVXpKyhO&q=${query}&limit=10&offset=0&rating=g&lang=en`
    );
    setGifs(result.data.data);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getGifs();
  };
  return (
    <div class="form-group">
      <form onSubmit={onSubmit} class="form-inline d-flex justify-content-center mt-3">
        <input
        class="form-control"
          type="text"
          placeholder="Buscar GIFs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Search" class="btn btn-primary ml-1"/>
      </form>
      <div class="mt-3 d-flex align-items-center justify-content-around flex-wrap">
        {gifs.map((gif) => {
          return <GifTile gif={gif}/>;
        })}
      </div>
    </div>
  );
}
export default SearchGif;
