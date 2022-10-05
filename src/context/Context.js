import { faker } from "@faker-js/faker";
import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
    const products = [...Array(18)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: Math.floor((Math.random() * (6 - 0 + 1)) + 0),
        isInStock: faker.datatype.boolean(),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.numeric(),
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }} >
            {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}