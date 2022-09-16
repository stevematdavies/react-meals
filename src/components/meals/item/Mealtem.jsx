import { MealItemForm } from "..";
import classes from "./MealItem.module.css";

const MealItem = ({meal}) => 
  <li className={classes.meal}>
    <div>
      <h3>{meal.name}</h3>
      <div className={classes.description}>{meal.description}</div>
      <div className={classes.price}>{`€${meal.price.toFixed(2)}`}</div>
    </div>
    <div>
      <MealItemForm id={meal.id}/>
    </div>
  </li>

export default MealItem;