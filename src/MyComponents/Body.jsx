import React from "react";
import first from "../images/first.webp";
import second from "../images/second.jpg";
import third from "../images/third.jpeg";
import women from "../images/women.jpeg";
import men from "../images/men.jpeg";
import kids from "../images/kids.jpeg";
import home from "../images/home.jpeg";
import beauty from "../images/beauty.jpeg";
import elect from "../images/electronics.jpeg";

export function Body1() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide custom-carousel"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={first} className="d-block carousel-img" alt="slide 1" />
        </div>
        <div className="carousel-item">
          <img src={second} className="d-block carousel-img" alt="slide 2" />
        </div>
        <div className="carousel-item">
          <img src={third} className="d-block carousel-img" alt="slide 3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export function Body2() {
  const products = [
    {
      id: 1,
      title: "Women Casual Shirt",
      img: women,
    },
    {
      id: 2,
      title: "Kids Comfort",
      img: kids,
    },
    {
      id: 5,
      title: "Beauty",
      img: beauty,
    },
    {
      id: 4,
      title: "Home Decor",
      img: home,
    },
    {
      id: 6,
      title: "Electronics Product",
      img: elect,
    },
    {
      id: 3,
      title: "Men Zone",
      img: men,
    },
  ];

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Our products</h2>
      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-md-3 mb-2" key={product.id}>
              <div className="card h-90">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <p className="card-text">{product.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
