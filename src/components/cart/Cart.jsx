import { useContext } from "react";
import {CartContext, ModalContext} from "../../context/";
import { Modal } from "../ui";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = <ul className={classes['cart-items']}>{
    [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}]
      .map(ci => <li key={ci.id}>{ci.name}</li>)
  }</ul>;

  const modalContext = useContext(ModalContext);
  const cartContext = useContext(CartContext);

  return modalContext.modalIsShown ?
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`€${cartContext.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={modalContext.hide}>
            Close</button>
        <button className={classes.button}>Order</button>
      </div>
  </Modal>
    : null
}

export default Cart;