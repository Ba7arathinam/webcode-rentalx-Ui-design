import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="d-flex navbar-brand" href="">
          <img
            style={{
              margin: "0 10px 0 0",
            }}
            src="https://cdn2.iconfinder.com/data/icons/realestate-vol1-yellow-shadow-bukeicon/32/rent_house_property_bukeicon-512.png"
            alt="app-logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          <h2>RentaLX</h2>
        </a>
        <div className="d-flex text-light link-container">
          <Link to={"/"}>
            <button type="button" class="btn btn-warning">Home</button>
          </Link>
          <p></p>
          <Link to={"/cart"}>
            <button type="button" class="btn btn-warning">Cart</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
