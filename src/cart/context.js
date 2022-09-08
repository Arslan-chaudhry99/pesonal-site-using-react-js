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
  let increment=(inc)=>{
    dispatch({
      type:"INCREMENT",
      payload:inc
    })
  }
  let decrement=(dec)=>{
    dispatch({
      type:"DECREMENT",
      payload:dec
    })
  }
  let clearAll=()=>{
    dispatch({
      type:"ClearAll",
      
    })
  }
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <AppContext.Provider value={{ state, removeItem, AddTo, increment,decrement,clearAll }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export { AppContext, AppProvider };
