import { createContext } from "react";

const ModalContext = createContext({
  modalIsShown: false,
  hide: () => {},
  show: () => {}
});

export default ModalContext


