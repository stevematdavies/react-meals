import React from 'react';
import classes from "./Input.module.css";


const Input = React.forwardRef(({label, id, type, input}, ref) => 
  <div className={classes.input}>
    <label htmlFor={id}>{label}</label>
    <input ref={ref} id={id} type={type}  {...input}/>
  </div>
)

export default Input;