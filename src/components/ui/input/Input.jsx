import classes from "./Input.module.css";


const Input = ({label, id, type, input}) => 
  <div className={classes.input}>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type}  {...input}/>
  </div>

export default Input;