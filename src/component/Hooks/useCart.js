import { useEffect } from "react"
import { useState } from "react"
import { getStroedCart } from "../../utilities/fakedb"

const useCart = (products) => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getStroedCart()
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    return [cart, setCart]
}

export default useCart;