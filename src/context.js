import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const getInitialState = () => {
  const saved = localStorage.getItem("darkMode");
  return { darkMode: saved === "true" };
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      const next = !state.darkMode;
      localStorage.setItem("darkMode", next);
      return { darkMode: next };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, undefined, getInitialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
