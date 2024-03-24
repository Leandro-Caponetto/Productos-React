/** @format */
import { useState, useEffect } from "react";
import { Card } from "../comoponents/Card";

export const ComprasPages = () => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProductos(data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);
  return (
    <>
      <h1>Comprar producto</h1>
      <div className="cards">
        {productos.map((producto) => (
          <Card
            key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.precio}
          ></Card>
        ))}
      </div>
    </>
  );
};
