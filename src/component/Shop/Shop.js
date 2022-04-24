import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStroedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../Hooks/useProducts';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // const [products, setProducts] = useState([])

    // const [products, setProducts] = useProducts()

    const [cart, setCart] = useState([])

    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize]=useState(10)

    // copy from useProducts
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/product?page=${page}&size${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            
    }, [])

    useEffect(() => {

        fetch('http://localhost:5000/productCOunt')
            .then(res => res.json())
            .then(data => {
                const count = data.count
                const pages = Math.ceil(count / 10)
                setPageCount(pages)
            })

    }, [])

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    // show previous data from cart in display
    useEffect(() => {
        const storedCart = getStroedCart()
        const savedCart = []
        for (const id in storedCart) {
            const addedProducts = products.find(product => product._id === id)
            if (addedProducts) {
                const quantity = storedCart[id]
                addedProducts.quantity = quantity
                savedCart.push(addedProducts)
            }
        }
        setCart(savedCart)
    }, [products])

    // 
    const handleAddToCart = (selectedProduct) => {
        let newCart = []
        const exists = cart.find(product => product._id === selectedProduct._id)
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }
        // const newCart = [...cart, selectedProduct]
        setCart(newCart)
        addToDb(selectedProduct._id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number => 
                        <button onClick={()=> setPage(number)} 
                        className={page === number ? 'selected': ''}
                        >{number + 1}</button>)
                    }
                    <select onChange={(e)=>setSize(e.target.value)} name="" id="">
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;