import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItme from '../ReviewIttem/ReviewItme';
import '../Shop/Shop.css'

const Orders = () => {

    const [products, setProducts] = useProducts()

    const [cart, setCart] = useCart(products)

    return (
        <div className='shop-container'>
            
            <div className="products-container">

                {
                    cart.map(product => <ReviewItme
                        key={product.id}
                        product={product}
                    ></ReviewItme>)
                }

            </div>

            <div className="cart-container">

                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Orders;