import React from 'react';
import './App.css';
import Products from './components/Products/Products';
import Cart from './components/cart/Cart';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <Products />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
