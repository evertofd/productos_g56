import { useState, useEffect } from "react";
import Grilla from "./components/Grilla";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const obtenerInfomarcion = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
    let result = await data.json();
    setProducts(result);
  };

  useEffect(() => {
    obtenerInfomarcion();
  }, []);

  return (
    <div className="container">
      <h1>Productos</h1>
      <Grilla products={products}/>
    </div>
  );
};

export default App;
