import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import '../Shop/Shop.css'

const Orders = () => {

    const [products, setProducts] = useProducts()

    const [cart, setCart] = useCart(products)

    return (
        <div className='shop-container'>
            {/* <h2>This is Order: {products.length}</h2>
            <p>Cart has: {cart.length}</p> */}
            <div className="products-container">

            </div>

            <div className="cart-container">

                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Orders;