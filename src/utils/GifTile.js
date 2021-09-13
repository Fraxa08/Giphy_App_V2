import React from 'react';
import "./GifTile.scss"

function GifTile({gif}) {
    return(
        <div>
        <img className="size-img" alt="gifs" src={gif["images"]["downsized"]["url"]}/>
        </div>
    )
}
export default GifTile;