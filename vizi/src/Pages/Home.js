import React, { useEffect, useState } from 'react';
import api from '../api';
import styles from './Home.module.css';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        async function getProducts() {
            const response = await api.get(`products/`);
            setProducts(response.data);
          }
          getProducts();
    })

  return (
    
        <div className={styles.container}>
       { products.map ((product)=> {
            return (                
                    <div key={product.id}className={styles.card}>
                        <img src={product.thumb} alt="Imagem do produto"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">R$ {product.price}</p>
                        
                        </div>
                    </div>
            )
        })
    }


    </div>
  )
}
