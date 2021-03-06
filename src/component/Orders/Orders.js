import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItme from '../ReviewIttem/ReviewItme';
import '../Shop/Shop.css'
import './Orders.css'

const Orders = () => {

    const [products, setProducts] = useProducts()

    const [cart, setCart] = useCart(products)

    const navigate = useNavigate()

    const handleRemoveProduct = product => {
        const rest = cart.filter(prdc => prdc._id !== product._id)
        setCart(rest)

        // remove selected item from local storage
        removeFromDb(product._id)
    }

    return (
        <div className='shop-container'>

            <div className="review-itmes-container">

                {
                    cart.map(product => <ReviewItme
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItme>)
                }

            </div>

            <div className="cart-container">

                <Cart cart={cart}>

                    <button onClick={() => navigate('/shipment')}>Proceed Shipping</button>

                </Cart>

            </div>

        </div>
    );
};

export default Orders;