import { toInteger } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const items = useSelector(state => state.items); // Assuming 'items' is the key in Redux state
  const cartItems = Object.values(items); // Convert object values to array of cart items

  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p> {/* Parse price to float */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
