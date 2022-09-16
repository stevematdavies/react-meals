import { Fragment } from "react";
import { Meals } from "./components/meals";
import { Header } from "./components/layout/";
import { Cart } from "./components";
import { CartContextProvider, ModalContextProvider } from "./context"

function App() {
  return (
    <Fragment>
      <CartContextProvider>
        <ModalContextProvider>
          <Cart />
          <Header />
        </ModalContextProvider>
      </CartContextProvider>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
