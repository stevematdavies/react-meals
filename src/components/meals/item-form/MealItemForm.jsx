import { Input } from "../../ui";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({id}) =>
  <form className={classes.form}>
    <Input 
      label="Amount" 
      id={`amount_${id}`} 
      type="number" 
      input={{min: 1, max: 5, defaultValue: 1, step: 1}}/>
    <button>+ Add</button>
  </form>

export default MealItemForm;