import React, { createContext } from "react";
import Cart from "../Cart";
const carts=createContext();
let data=
<carts.Provider value={"aslan chaudhry"}>
<Cart/>
</carts.Provider>
export default carts;