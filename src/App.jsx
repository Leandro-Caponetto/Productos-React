/** @format */

import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./comoponents/Navbar.jsx";
import { ComprasPages } from "./pages/ComprasPages.jsx";
import { CarritosPages } from "./pages/CarritosPages.jsx";

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<ComprasPages></ComprasPages>}></Route>
          <Route
            path="/carrito"
            element={<CarritosPages></CarritosPages>}
          ></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </>
  );
};
