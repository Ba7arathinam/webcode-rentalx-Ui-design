import React from "react";
import ProductCard from "../Components/Card/ProductCard";
import { useSelector } from "react-redux";


export default function Home() {

  const { items = [] } = useSelector((state) => {
    return state.food;
  });


  return (
    <div id="home-page-container">
      <section id="product-listing-container" className="d-flex k1">
        {items.length > 0 ? (
          items.map((product, index) => (
            <ProductCard
              key={`product-card-${index}`}
              data={product}
            />
          ))
        ) : (
          <p>No Product found</p>
        )}
      </section>
    </div>
  );
}
