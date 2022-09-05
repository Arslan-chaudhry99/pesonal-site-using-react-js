import React from "react";
import "./components/cart.css";
const Cart = () => {
  return (
    <>
      <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
          <div class="col-md-8">
            <div class="p-2 shoingTitle">
              <h4>Shopping cart</h4>
              <span class="text-danger">Remove all</span>
            </div>
            {/* <h3 style={{textAlign:"center"}}>Cart is empety</h3> */}
            <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <div class="mr-1 imageandpara">
                <img
                  class="rounded"
                  src="https://i.postimg.cc/260Q01vP/javascript.gif"
                  width="70"
                />
                <span class="font-weight-bold">
                  What is javascript how it works.what is python
                </span>
              </div>
              <div class="d-flex flex-column align-items-center product-details">
                <div class="d-flex flex-row product-desc"></div>
              </div>
              <div class="d-flex flex-row align-items-center qty">
                <i class="minusSign shadow">
                  <i class="bi bi-dash"></i>
                </i>
                <span class="text-grey quantityNumber">100</span>
                <i class="minusSign shadow">
                  <i class="bi bi-plus"></i>
                </i>
              </div>
              <div>
                <span class="text-grey productAmount">$20.00</span>
              </div>
              <div
                class="d-flex align-items-center text-dark"
                style={{
                  cursor: "pointer",
                  fontWeight: "900",
                  fontSize: "15px",
                }}
              >
                <i class="bi bi-x text-danger"></i>
              </div>
            </div>

            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
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
            <div class="totalItems">
              Total Items: <strong>12</strong>
            </div>
            <span class="TotalPrice">
              Total price: <strong>12$</strong>
            </span>
            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
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
