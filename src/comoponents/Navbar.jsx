/** @format */

import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid container">
        <NavLink to="/" className="navbar-brand" href="#">
          Product
        </NavLink>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active">
                Compras
              </NavLink>
            </li>
          </ul>
          <NavLink to="/carrito">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
