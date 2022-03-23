import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStroedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // show previous data from cart in display
    useEffect(() => {
        const storedCart = getStroedCart()
        const savedCart = []
        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id)
            if (addedProducts) {
                const quantity = storedCart[id]
                addedProducts.quantity = quantity
                savedCart.push(addedProducts)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct)
            exists.quantity = exists.quantity + 1
            newCart=[...rest, exists]
        }
        // const newCart = [...cart, selectedProduct]
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;