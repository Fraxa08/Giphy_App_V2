import React, { useState } from "react";
import axios from "axios";
import GifTile from "../GifTile/GifTile";

function SearchGif() {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);

  async function getGifs() {
    const result = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=SSDP5H8axlmLkYZr9xLqlw6OdVXpKyhO&q=${query}&limit=12&offset=0&rating=g&lang=en`
    );
    setGifs((data) => [{ titulo: query, gifs: result.data.data }, ...data]);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getGifs();
    setQuery("");
  };
  return (
    <div className="form-group">
      <form
        onSubmit={onSubmit}
        className="form-inline d-flex justify-content-center mt-3"
      >
        <input
          className="form-control"
          type="text"
          placeholder="Buscar GIFs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Search" className="btn btn-primary ml-1" />
      </form>
      <div className="mt-3 d-flex align-items-center justify-content-around flex-wrap">
        {gifs.map(gif => (
          <div key={gif.titulo}>
            <h1 className='ml-auto text-white'>{gif.titulo}</h1>
            <GifTile gifs={gif.gifs}/>  
          </div>
        ))}
      </div>
    </div>
  );
}
export default SearchGif;
