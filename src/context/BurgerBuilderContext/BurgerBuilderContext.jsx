import { createContext } from "react";

const BurgerBuilderContext = createContext({
  addIngredient: () => {},
  removeIngredient: () => {},
  closeModal: () => {},
  disabledInfo: {},
});

export default BurgerBuilderContext;
