import React from 'react';
import useProductStore from '../../Store/useProductStore';
import './CartPage.css';
import cartpage from "/assets/Image/cartpage.png"
import remove from "/assets/Image/remove.png"

function CartPage() {
  const { cartItems, removeFromCart, } = useProductStore();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <img id='cartimg' src={cartpage}/>

<div id='allcartdiv'>
      <div id='detcartdiv'>
      <div id='titledetdiv'>
    <p>Product</p>
    <p id='priceword'>Price</p>
    <p>Quantity</p>
    <p id='subtatal'>Subtotal</p>
      </div>

      <div id='allcartproddiv'>
        {cartItems.map((item) => (
          <div key={item.id} id='deteachprodiv'>
            <img src={item.image} alt={item.title} id='prodimg' />
            
              <p id='title'>{item.title}</p>
              <p id='price'>Rp {item.price}</p>
              <p id='quantity'>{item.quantity}</p>
              <p id='subtotal'>Rp {(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>
                <img src={remove} id='removeimg'/>
              </button>
            
          </div>
        ))}
      </div>

      </div>

      <div id='carttotal'>
      <h2>Cart Totals</h2>
      <p>Total: Rp {total.toFixed(2)}</p>
      <button>Checkout</button>
      </div>

      </div>

    
    </div>
  );
}

export default CartPage;