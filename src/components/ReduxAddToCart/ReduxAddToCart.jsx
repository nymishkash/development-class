import { useSelector, useDispatch } from 'react-redux';

function ReduxAddToCart({ product }) {
  let dispatch = useDispatch();

  function increase() {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  function decrease() {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  }

  let quantity = useSelector((state) => {
    return state.items[product.id]?.quantity || 0;
  });

  if (quantity === 0) {
    return (
      <div>
        <button onClick={increase}>Add to Cart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>
    );
  }
}

export default ReduxAddToCart;
