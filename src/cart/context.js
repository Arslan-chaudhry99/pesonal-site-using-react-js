import React, { createContext } from "react";
import Cart from "./Cart";
import Books from "./Books";
const appContext = createContext();

const contextProvider = () => {
  return (
    <>
      <appContext.Provider value={"arslan chauhry"}>
        <Books/>
      </appContext.Provider>
    </>
  );
};

export default contextProvider;
export{appContext};
