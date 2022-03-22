import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState()

    useEffect(() => {
fetch('products.json')
.then(res => res.json())
.then(data => setproducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="croducts-container">
                <h3>This is for products</h3>
            </div>

            <div className="cart-container">
                <h4>Order summary</h4>
            </div>
        </div>
    );
};

export default Shop;