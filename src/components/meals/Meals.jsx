import { Fragment } from "react";
import {AvailableMeals, MealsSummary} from "../meals"

const Meals = () => {
  return <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
}

export default Meals;