import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProductStore from '../../Store/useProductStore';
import axios from 'axios';
import "./ProductDetail.css"
import Breadcrumb from "../Breadcrumb/Breadcrumb"

function ProductDetail() {
    const { id } = useParams();
    const { selectedProductId, setSelectedProduct, products, setProducts,
        addToCart, increaseQuantity, decreaseQuantity} = useProductStore();

        const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setSelectedProduct(response.data.id);  
            setProducts([response.data]);  
        };

        fetchProduct();
    }, [id, setSelectedProduct, setProducts]);

    const product = products.find(p => p.id === selectedProductId);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <Breadcrumb />
        
        <div id='alldetproduct'>
            <div id='proimgdiv'>
            <img src={product.image} alt={product.title} />
            </div>

            <div id='detofprod'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>Category: {product.category}</h3>
            <h3>Price: Rp {product.price}</h3>

            <div id='cart_count'>
            <div id='countdiv'>
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button id='addcart' onClick={() => {
                for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                }
            }}>Add To Cart</button>
            </div>


            </div>
            
        </div>

        </div>
    );
}

export default ProductDetail;