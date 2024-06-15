import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../components/slices/counterslice';
import Navbar from '../components/Navbar2';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
    <Navbar/>
    <div className="cart ">
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center mr-3">
                  <img src={item.image} alt={item.title} className="img-thumbnail mr-3" style={{ width: '50px' }} />
                  <h5 className="mb-1">{item.title}</h5>
                </div>
                <div className="d-flex align-items-center mx-4">
                  <button className="btn btn-light btn-sm mr-2" onClick={() => handleIncrement(item)}><i className='fa fa-plus'/></button>
                  <input type='text' value={item.quantity} className="form-control text-center" style={{width: '50px'}} readOnly />
                  <button className="btn btn-light btn-sm ml-2" onClick={() => handleDecrement(item)}><i className='fa fa-minus'/></button>
                </div>
                <h6 className="mb-1 mx-4">${item.price * item.quantity}</h6>
                <button className="btn btn-danger btn-sm" onClick={() => handleRemove(item)}><i className='fa fa-trash'/></button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <h3>Cart Total: ${calculateTotal()}</h3>
        <button className='btn btn-success'>Checkout</button>
      </div>
    </div>
  </>);
};

export default Cart;



    
    
    

