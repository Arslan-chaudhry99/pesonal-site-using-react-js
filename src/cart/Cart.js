import React, { useContext } from "react";
import "../components/cart.css";
import { useEffect } from "react";
import { AppContext } from "./context";
const Cart = () => {
  const { state ,removeItem} = useContext(AppContext);

  return (
    <>
      <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
          <div class="col-md-8">
            <div class="p-2 shoingTitle">
              <h4>Shop Now</h4>
              <span class="text-danger">Remove all</span>
            </div>
            {state.map((item) => {
              return (
                <>
                  <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded shadow">
                    <div class="mr-1 ">
                      <img class="rounded" src={item.image} width="70" />
                      <span class="font-weight-bold">{item.name}</span>
                    </div>
                    <div class="d-flex flex-column align-items-center product-details">
                      <div class="d-flex flex-row product-desc"></div>
                    </div>
                    <div class="d-flex flex-row align-items-center qty">
                      <i class="minusSign border">
                        <i class="bi bi-dash"></i>
                      </i>
                      <span class="text-grey quantityNumber border px-3">
                        {item.quantity}
                      </span>
                      <i class="minusSign  border">
                        <i class="bi bi-plus"></i>
                      </i>
                    </div>
                    <div>
                      <span class="text-grey productAmount">{`${item.price * item.quantity}$`}</span>
                    </div>
                    <div 
                    class="removeItem bg-danger shadow"
                    onClick={()=>{removeItem(item)}}
                    >
                      <i class="bi bi-x text-white"></i>
                    </div>
                  </div>
                </>
              );
            })}

            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded shadow">
              <input
                type="text"
                class="form-control gift-card "
                placeholder="discount code/gift card"
              />
              <button
                class="btn  btn-sm ml-3 shadow"
                type="button"
                style={{
                  outline: "#3EC1D5",
                  backgroundColor: "#3EC1D5",
                  color: "white",
                }}
              >
                Apply
              </button>
            </div>
            <div class="totalItems ">
              Total Items: <strong className="shadow">12</strong>
            </div>
            <span class="TotalPrice">
              Total price: <strong className="shadow">12$</strong>
            </span>
            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded ">
              <button
                class="btn  btn-block btn-sm ml-2 pay-button shadow"
                type="button"
                style={{ backgroundColor: "#3EC1D5" }}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
