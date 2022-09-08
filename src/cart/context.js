import React, { createContext, useEffect } from "react";
import Data from "./Data";
import { useReducer } from "react";
import reducer from "./Reducer";
import Books from "./Books";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  let getFromStore = () => {
    let localData = localStorage.getItem("product");
    if (localData) {
      return JSON.parse(localData);
    } else {
      return [];
    }
  };
  const [state, dispatch] = useReducer(reducer, getFromStore());

  const AddTo = (obj) => {
    dispatch({
      type: "Add_to_cart",
      payload: obj,
    });
  };
  const removeItem = (remove) => {
    dispatch({
      type:"remove_Item",
      payload:remove
    })
  };
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <AppContext.Provider value={{ state, removeItem, AddTo }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export { AppContext, AppProvider };
