import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItme from '../ReviewIttem/ReviewItme';
import '../Shop/Shop.css'

const Orders = () => {

    const [products, setProducts] = useProducts()

    const [cart, setCart] = useCart(products)

    const handleRemoveProduct = product => {
        console.log(product);
    }

    return (
        <div className='shop-container'>

            <div className="review-itmes-container">

                {
                    cart.map(product => <ReviewItme
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
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