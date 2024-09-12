import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./EachCategory.css"

function EachCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div id='titlecatdiv'>
      <h1>{category}</h1>
      <div id='proddivgrid'>
        {products.map((product) => (
          <div key={product.id} id='eachprocard'>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: {product.price} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EachCategory;