import React from "react";

function GoodsCard({ name, price, img }) {
  return (
    <div className="goods-card">
      <div className="goods-image-wrapper">
        <img src={img} alt={name} className="goods-image" />
      </div>
      <div className="goods-info">
        <h3 className="goods-name">{name}</h3>
        <p className="goods-price">Cost: {price} grn</p>
      </div>
    </div>
  );
}

export default GoodsCard;
