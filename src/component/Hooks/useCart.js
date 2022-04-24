import { useEffect } from "react"
import { useState } from "react"
import { getStroedCart } from "../../utilities/fakedb"
import Product from "../Product/Product"

const useCart = () => {

    const [cart, setCart] = useState([])

    // useEffect((products) => {
    useEffect(() => {
        const storedCart = getStroedCart()
        const savedCart = []
        const keys = Object.keys(storedCart)
        console.log(keys);
        console.log(storedCart);

        fetch('http://localhost:5000/productByKeys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(Products => {

                for (const id in storedCart) {
                    const addedProduct = Products.find(product => product._id === id)
                    if (addedProduct) {
                        const quantity = storedCart[id]
                        addedProduct.quantity = quantity
                        savedCart.push(addedProduct)
                    }
                }
                setCart(savedCart)

            })

        // }, [products])
    }, [])

    return [cart, setCart]
}

export default useCart;