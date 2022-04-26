import React, { useEffect, useState } from "react";
import api from "../api";


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`products/`);
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <main className="page container">
      <div className="row justify-content-md-center">
        {products.map((product) => {
          return (
            <div key={product.id} className="card mt-2 mr-2 mb-2 col-2">
              <img src={product.thumb} className="card-img-top" alt="Imagem do produto" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-align-center">R$ {product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

