import React, { useContext } from "react";
import "../components/cart.css";
import { useEffect } from "react";
import { AppContext } from "./context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, removeItem, increment, decrement, clearAll } =
    useContext(AppContext);
  let totalP = 0;
  state.map((item) => {
    totalP += item.price * item.quantity;
  });
  let move = useNavigate("");
  let moveToshop = () => {
    move("/Books");
  };
let checkOutNow=()=>{
  move("/Checkout")
}
  return (
    <>
      <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
          <div class="col-md-8">
            <div class="p-2 shoingTitle">
              <h4>Shop Now</h4>
              <span
                class="text-danger"
                onClick={() => {
                  clearAll();
                }}
              >
                Remove all
              </span>
            </div>
            {state.length !== 0 ? (
              state.map((item) => {
                return (
                  <>
                    <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded shadow">
                      <div class="imageandpara ">
                        <img class="rounded border shadow" src={item.image} width="70" />
                        <span class="font-weight-bold" style={{fontSize:"10px"}}>{item.name}</span>
                      </div>
                      <div class="d-flex flex-column align-items-center product-details">
                        <div class="d-flex flex-row product-desc"></div>
                      </div>
                      <div class="d-flex flex-row align-items-center qty">
                        <i
                          class="minusSign border"
                          onClick={() => {
                            decrement(item);
                          }}
                        >
                          <i class="bi bi-dash"></i>
                        </i>
                        <span class="text-grey quantityNumber border px-3">
                          {item.quantity}
                        </span>
                        <i
                          class="minusSign  border"
                          onClick={() => {
                            increment(item);
                          }}
                        >
                          <i class="bi bi-plus"></i>
                        </i>
                      </div>
                      <div>
                        <span class="text-grey productAmount">{`${
                          item.price * item.quantity
                        }$`}</span>
                      </div>
                      <div
                        class="removeItem bg-danger "
                        onClick={() => {
                          removeItem(item);
                        }}
                      >
                        <i class="bi bi-x text-white"></i>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div class="alert alert-danger" role="alert">
                No item avavilable now!{" "}
                <p
                  className="moveToshop text-info"
                  onClick={() => {
                    moveToshop();
                  }}
                >
                  Click here to add Items
                </p>
              </div>
            )}

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
                onClick={() => {
                  alert(
                    "currently this feature is not avavilable. We will add it soon."
                  );
                }}
              >
                Apply
              </button>
            </div>
           
            <div class="totalItems ">
              Total Items: <strong className="shadow">{state.length}</strong>
            </div>
            <span class="TotalPrice">
              Total price: <strong className="shadow">{`${totalP}$`}</strong>
            </span>
            
            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded ">
              <button
                class="btn  btn-block btn-sm ml-2 pay-button shadow"
                type="button"
                style={{ backgroundColor: "#3EC1D5" }}
                onClick={checkOutNow}
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
