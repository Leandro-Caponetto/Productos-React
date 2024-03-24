/** @format */

import { useState } from "react";
import "../styles/cad.css";
import { NavLink } from "react-router-dom";

export const Card = ({ imagen, titulo, descripcion, precio }) => {
  const [added, setAdded] = useState(false);
  const clickAgregar = () => {
    setAdded(true);
  };
  const clickQuitar = () => {
    setAdded(false);
  };
  return (
    <div className="tarjeta">
      <NavLink to="/detalle">
        <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      </NavLink>
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>
        {added ? (
          <button type="button" className=" boton-quitar" onClick={clickQuitar}>
            Quitar al carrito
          </button>
        ) : (
          <button
            type="button"
            className=" boton-agregar"
            onClick={clickAgregar}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};
