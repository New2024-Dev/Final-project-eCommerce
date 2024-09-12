import "./Allproduct.css"
import React, { useEffect } from 'react';
import useProductStore from '../../Store/useProductStore';
import shop from "/assets/Image/shop.png"
import { useNavigate } from 'react-router-dom';

function Allproduct(){
    const { products, fetchProducts, getCurrentProducts, currentPage, 
      setPage, selectedProductId, setSelectedProduct } = useProductStore();

      const navigate = useNavigate();

    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);
  
    const currentProducts = getCurrentProducts(useProductStore.getState());
  
    const handleProductClick = (id) => {
      setSelectedProduct(id);
      navigate(`/Shope/${id}`);
    };

    return (
      <div>
<img src={shop}  id="shopimg"/>

      <div id="allproduct">
        <div id="product-grid">
          {currentProducts.map((product) => (
            <div className={`product-card ${selectedProductId === product.id ? 'selected' : ''}`}
            key={product.id}
            onClick={() => handleProductClick(product.id)}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <h3>Rp {product.price}</h3>

              {selectedProductId === product.id && (
              <div className="add-to-cart">
                Add to cart
              </div>
            )}

            </div>
          ))}
        </div>
        <div id="pagination">
          <button onClick={() => setPage(1)} disabled={currentPage === 1}>
            1
          </button>
          <button onClick={() => setPage(2)} disabled={currentPage === 2}>
            2
          </button>
          <button
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage * 8 >= products.length}
          >
            Next
          </button>
        </div>
      </div>

</div>
    );
}

export default Allproduct