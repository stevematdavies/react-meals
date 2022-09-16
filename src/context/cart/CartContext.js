import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addCartItem: () => {},
  removeCartItem: () => {}
})

export default CartContext;