import React, { useReducer } from "react";
import { createContext } from "react";
import { faker } from "@faker-js/faker";
import { CartReducer } from "./CartReducer";
import { ProductReducer } from "./ProductReducer";

export const ShopContext = createContext();

faker.seed(99);

const ShopState = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(ProductReducer, {
    byRating: 0,
    byOutOfStock: false,
    byFastDelivery: false,
    bySearch: "",
  });

  return (
    <ShopContext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopState;
