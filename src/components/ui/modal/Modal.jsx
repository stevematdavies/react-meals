import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import ModalContext from "../../../context/modal/ModalContext";
import classes from "./Modal.module.css";

const overlayElement = document.getElementById("overlays");
const ModalBackdrop = () =>{ 
    const modalContext = useContext(ModalContext);
    return <div className={classes.backdrop} onClick={modalContext.hide}/>
}

const ModalOverlay = ({children}) =>
  <div className={classes.modal}>
    <div className={classes.content}>
      {children}
    </div>
  </div>

const Modal = ({children}) => 
  <Fragment>
    {ReactDOM.createPortal(<ModalBackdrop />, overlayElement)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, overlayElement) }
  </Fragment>
export default Modal;