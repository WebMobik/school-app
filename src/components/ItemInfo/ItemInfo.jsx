import React from "react";

const ItemInfo = ({ title, content, example }) => {
  return (
    <div className="content">
      <div className="item-info">
        <h1 className="title">{title}</h1>
        <p className="content">{content}</p>
        <div className="example">{example}</div>
      </div>
    </div>
  );
};

export default ItemInfo;
