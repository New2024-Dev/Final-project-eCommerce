import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Shope from "./Pages/Shope"
import Contact from "./Pages/Contact"
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart"
import Category from "./Pages/Category"

function App() {
  

  return (
    <>
      <main>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Shope" element={<Shope />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shope/:id" element={<SingleProduct />} />
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/category/:category" element={<Category />}/>

          </Route>
        
      </Routes>
    </BrowserRouter>
    </main>
    </>
  )
}

export default App
