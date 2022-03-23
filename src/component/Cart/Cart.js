import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0
    let shipping = 0
    for (const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
    }

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : </p>
            <h5>Grand Total : </h5>
        </div>
    );
};

export default Cart;