import { useState } from "react";
import ModalContext from "./ModalContext";

const ModalContextProvider = ({children}) => {

  const  [modalIsShown, setModalIsShown] = useState(false)

  const modalContext = {
    modalIsShown,
    hide: () => setModalIsShown(false),
    show: () => setModalIsShown(true)
  };

  return <ModalContext.Provider value={modalContext}>
      {children}
  </ModalContext.Provider>
}

export default ModalContextProvider;