import React from "react";
const Item = (props) => (
        <div className="right">
            <div className="title">{props.item.title}</div>
            <div className="artist">{props.item.artist}</div>
            <div className="album">{props.item.album}</div>
        </div>
);

export default Item;