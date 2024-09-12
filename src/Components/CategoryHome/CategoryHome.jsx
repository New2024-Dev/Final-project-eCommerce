import "./CategoryHome.css"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Electronic from "/assets/Image/Electronic.jpg"
import jewelery from "/assets/Image/jewelery.jpeg"
import men from "/assets/Image/men'sclothing.jpeg"
import women from "/assets/Image/women'sclothing.jpeg"
import homeimg from "/assets/Image/homeimg.jpg"

function CategoryHome(){

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
  
    
    const categoryImages = [Electronic, jewelery, men, women];
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/categories')
        .then((response) => response.json())
        .then((data) => {
          setCategories(data); 
          setLoading(false); 
        })
        .catch((error) => {
          console.error('Error fetching categories:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Loading categories...</p>;
    }
  

    return(
      <div>
        <img src={homeimg} id="homeimg"/>

        <div id="allcatdiv">

            <h1 id="catword">Categories</h1>

            <div id="detcatdiv">
            {categories.map((category, index) => (
          <div key={index} >
            <img
              src={categoryImages[index % categoryImages.length]}/>
            {/* <h3>{category}</h3> */}
            <Link to={`/category/${category}`}>{category}</Link>
          </div>
        ))}
            </div>
        </div>

        </div>
    )
}

export default CategoryHome