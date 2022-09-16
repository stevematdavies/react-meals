import { useContext } from "react";
import { MealItemForm } from "..";
import { CartContext } from "../../../context";
import classes from "./MealItem.module.css";

const MealItem = ({meal}) => {
  const cartContext = useContext(CartContext);
  const onAddItem = amt => {
    cartContext.addCartItem({
      ...meal,
      amount: amt,
    })
  }

  return <li className={classes.meal}>
    <div>
      <h3>{meal.name}</h3>
      <div className={classes.description}>{meal.description}</div>
      <div className={classes.price}>{`€${meal.price.toFixed(2)}`}</div>
    </div>
    <div>
      <MealItemForm onAddItem={onAddItem} id={meal.id}/>
    </div>
  </li>
}

export default MealItem;