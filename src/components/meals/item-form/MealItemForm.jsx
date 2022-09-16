import { useRef, useState } from "react";
import { Input } from "../../ui";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({id, onAddItem}) => {

  const amountInputRef = useRef()
  const [amtIsValid, setAmtIsValid] = useState(true);

  const onSubmit = evt => {
    evt.preventDefault();
    const enteredAmount = +amountInputRef.current.value
    if(!enteredAmount || isNaN(enteredAmount)) {
        setAmtIsValid(false);
        return
    }
    onAddItem(enteredAmount)


  }

  return <form className={classes.form} onSubmit={onSubmit}>
      <Input 
        ref={amountInputRef}
        label="Amount" 
        id={`amount_${id}`} 
        type="number" 
        input={{min: 1, max: 5, defaultValue: 1, step: 1}}/>
      <button>+ Add</button>
      {!amtIsValid && <p>Please enter a valid amount!</p>}
    </form>
}

export default MealItemForm;