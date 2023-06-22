import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div className="navbar tt-navbar navbar-expand-lg">
        <div className="container tt-navbar-container">
          <div className="navbar-brand">
            <Link href={`/`}>
              <img src="../../assets/images/logo.png" alt="Logo" />
            </Link>
          </div>

          <div class="input-group header-search-field">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
          <div className="tt-navigation justify-content-end d-flex">
            <ul className="ml-auto align-items-center">
              <li className="nav-item-ss">
                <a
                  className="nav-link nav-wo-btn active"
                  aria-current="page"
                  href="/landingPage"
                >
                  <span>
                    <i class="fa fa-user"></i>
                  </span>
                  Account
                </a>
              </li>

              <li className="nav-item-ss">
                <a className="nav-link nav-wo-btn" href="/landingPage#about">
                  <span>
                    <i class="fa fa-heart"></i>
                  </span>
                  My Items
                </a>
              </li>
              <li className="nav-item-ss">
                <a className="nav-link nav-wo-btn" href="/landingPage#services">
                  <span>
                    <i class="fa fa-shopping-cart"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar tt-navbar-main-menu navbar-expand-lg">
        <div className="container tt-navbar-container">
          <button
            className={`navbar-toggler${collapsed ? " collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapsed}
          >
            {collapsed ? (
              // <span className="navbar-toggler-icon"></span>
              <img src="../../assets/images/prime_bars.png" alt="" />
            ) : (
              <img src="../../assets/images/close-menu.png" alt="" />
            )}
          </button>

          <div
            className="collapse navbar-collapse main-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto align-items-center justify-content-between w-100">
              <li className="nav-item">
                <a
                  className="nav-link nav-wo-btn active"
                  aria-current="page"
                  href="/landingPage"
                >
                  Jewelry & Accessories
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link nav-wo-btn" href="/landingPage#about">
                  Clothing & Shoes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-wo-btn" href="/landingPage#services">
                  Home & Living
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-wo-btn" href="/landingPage#services">
                  Wedding & Party
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-wo-btn" href="/landingPage#services">
                  Toys & Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-wo-btn" href="/landingPage#services">
                  Art & Collectibles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-wo-btn" href="/landingPage#services">
                  Craft Supplies & Tools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-wo-btn" href="/landingPage#services">
                  Vintage
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
