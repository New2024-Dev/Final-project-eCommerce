import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductStore from '../../Store/useProductStore';
import "./Breadcrumb.css"

function Breadcrumb() {
    const { id } = useParams();  
    const [title, setTitle] = useState('');
    const { products, fetchProducts } = useProductStore();

    useEffect(() => {
        
        const product = products.find(p => p.id === parseInt(id));
        if (product) {
            setTitle(product.title);
        } else {
            
            const fetchProduct = async () => {
                await fetchProducts();
                const product = products.find(p => p.id === parseInt(id));
                if (product) {
                    setTitle(product.title);
                }
            };
            fetchProduct();
        }
    }, [id, products, fetchProducts]);

    return (
        <div className="breadcrumb">
            <Link to="/">Home</Link> &gt;
            <Link to="/Shope">Shope</Link> &gt;
            <span>{title}</span>
        </div>
    );
}

export default Breadcrumb;