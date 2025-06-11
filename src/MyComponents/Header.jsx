import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid align-items-center">
          <img src={logo} alt="logo" width={80} height={80} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              {["Men", "Women", "Kids", "Home", "Beauty"].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="search-container d-flex align-items-center me-4">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                className="form-control ps-5 search-input"
                type="search"
                placeholder="Search for products and more"
                aria-label="Search"
              />
            </div>
            <div style={{ margin: "20px" }}></div>
            <div className="icon-group d-flex align-items-center gap-3">
              <FontAwesomeIcon icon={faUser} size="lg" />
              <FontAwesomeIcon icon={faHeart} size="lg" />
              <FontAwesomeIcon icon={faBagShopping} size="lg" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
