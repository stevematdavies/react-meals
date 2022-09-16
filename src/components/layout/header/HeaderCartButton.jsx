import { useContext } from "react";
import { CartIcon } from  "../../../components";
import { ModalContext, CartContext } from "../../../context";

import classes from "./HeaderCartButton.module.css";

export const HeaderCartButton = () => {
  const modalContext = useContext(ModalContext);
  const cartContext = useContext(CartContext);

  const totalItemsInCart = cartContext.items
    .reduce((currentItem, nextItem) => currentItem + nextItem.amount, 0);

  return (
    <button className={classes.button} onClick={modalContext.show}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItemsInCart}</span>
    </button>
  )
}

export default HeaderCartButton;