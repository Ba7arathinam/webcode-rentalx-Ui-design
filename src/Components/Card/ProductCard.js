import React from "react";

export default function ProductCard({ data = {}, onAddToCart = (item) => {} }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={data.image_url}
        className="card-img-top"
        alt={`${data.product_name}product-image`}
      /> 
      <div className="card-body">
        <h5 className="card-title">{data.product_name}</h5>
        <p className="card-text">{data.description}</p>
        <p className="card-text"> <h6>{data.price.amount}INR</h6> for rental_period unit {data.rental_period.unit} and value <h6>{data.rental_period.value}</h6> </p>
        <button
          className="btn btn-primary"
          disabled={false}
          onClick={() => onAddToCart(data)}
        >
          {"Add to cart"}
        </button>
      </div>
    </div>
  );
}
