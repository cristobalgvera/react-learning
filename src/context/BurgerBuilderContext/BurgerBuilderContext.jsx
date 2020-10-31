import { createContext } from "react";

const BurgerBuilderContext = createContext({
  addIngredient: () => {},
  removeIngredient: () => {},
  disabledInfo: {},
});

export default BurgerBuilderContext;
