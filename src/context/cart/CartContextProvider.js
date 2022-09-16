import { useReducer } from "react";
import { CartContext } from "../";

const CartActions = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM'
}

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  const { price, amount } = action.payload;
  switch(action.type){
    case CartActions.ADD_ITEM:
      return {
        ...defaultCartState,
        items:  [...state.items, action.payload],
        totalAmount: state.totalAmount + price * amount
      }
    case CartActions.DELETE_ITEM:
      const { item } = action.payload;
      return {
        ...defaultCartState,
        items:  state.items.filter(i => i.id !== item.id),
        totalAmount: state.totalAmount - item.price
      }
    default: return defaultCartState;
  }
};

const CartContextProvider = ({ children }) => {

   const [cartState, dispatchCartAction ] = useReducer(cartReducer, defaultCartState);

  const addCartItem = item => {
    dispatchCartAction({type: CartActions.ADD_ITEM, payload: item})
  }

  const removeCartItem = item => {
    dispatchCartAction({type: CartActions.DELETE_ITEM, payload: item})
  }

  const _cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addCartItem,
    removeCartItem
  }
  
  return <CartContext.Provider value={_cartContext}>{ children }</CartContext.Provider>

}

export default CartContextProvider;