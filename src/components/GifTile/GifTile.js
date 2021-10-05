import React from "react";
import PropTypes from "prop-types";
import "./GifTile.scss";

function GifTile({ gifs }) {
  return (
    <div className='contenedor'>
      {gifs.map(gif => (
        <div className="card" key={gif.id}>
          <div className="card-body">
            <h6 className="card-title">{gif.title.toUpperCase()}</h6>
            <img
              className="size-img"
              alt="gifs"
              src={gif.images.downsized.url}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

GifTile.propTypes = {
  gifs: PropTypes.arrayOf(),
};

export default GifTile;
