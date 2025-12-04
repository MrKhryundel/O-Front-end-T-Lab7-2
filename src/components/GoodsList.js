import React from "react";
import GoodsCard from "./GoodsCard";

const goodsData = [
  {
    id: 1,
    name: "Apple",
    price: 15,
    img: process.env.PUBLIC_URL + "/img/Apple.jpg"
  },
  {
    id: 2,
    name: "Pear",
    price: 20,
    img: process.env.PUBLIC_URL + "/img/Pear.png"
  },
  {
    id: 3,
    name: "Grape",
    price: 25,
    img: process.env.PUBLIC_URL + "/img/Grape.png"
  },
  {
    id: 4,
    name: "Peach",
    price: 18,
    img: process.env.PUBLIC_URL + "/img/Peach.jpg"
  },
  {
    id: 5,
    name: "Banana",
    price: 12,
    img: process.env.PUBLIC_URL + "/img/Banana.png"
  },
  {
    id: 6,
    name: "Orange",
    price: 17,
    img: process.env.PUBLIC_URL + "/img/Orange.jpg"
  }
];

function GoodsList() {
  return (
    <div className="goods-list-container">
      <div className="goods-grid">
        {goodsData.map((item) => (
          <GoodsCard
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default GoodsList;

