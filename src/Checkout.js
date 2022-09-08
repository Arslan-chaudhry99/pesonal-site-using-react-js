import React from "react";
import "./components/check.css";
import { AppContext } from "./cart/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useContext(AppContext);
  let data = 0;
  state.map((item) => {
    return (data += item.price * item.quantity);
  });
  let nav=useNavigate("")
  let goto=()=>{
    nav("/Books")
  }
  return (
    <>
      <main class="page payment-page mt-4 shadow">
        <section class="payment-form dark">
          <div class="container">
            <form>
              <div class="products">
                <h3 class="title">Checkout</h3>
                { state.length !== 0 ? state.map((item) => {
                  return (
                    <>
                      <div
                        class="item border p-2 shadow"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                          <p class="item-name">{item.name}<span class="badge ml-2 rounded-pill text-white shadow" style={{backgroundColor:'rgb(62, 193, 213)'}}>{`${item.quantity} Items`}</span></p>
                        <span class="price">{item.price * item.quantity}$</span>
                      </div>
                    </>
                  );
                }):<div class="alert alert-danger" role="alert">
                No Item avavilable now.To Checkout please add items. <span className="text-dark goToline" onClick={goto}>click here to add</span>
              </div>}

                <div class="total">
                  Total<span class="price">{`${data}$`}</span>
                </div>
              </div>
              <div class="card-details">
                <h3 class="title">Credit Card Details</h3>
                <div class="row">
                  <div class="form-group col-sm-7">
                    <label for="card-holder">Card Holder</label>
                    <input
                      id="card-holder"
                      type="text"
                      class="form-control"
                      placeholder="Card Holder"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="form-group col-sm-5">
                    <label for="">Expiration Date</label>
                    <div class="input-group expiration-date">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="MM"
                        aria-label="MM"
                        aria-describedby="basic-addon1"
                      />
                      <span class="date-separator">/</span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="YY"
                        aria-label="YY"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div class="form-group col-sm-8">
                    <label for="card-number">Card Number</label>
                    <input
                      id="card-number"
                      type="text"
                      class="form-control"
                      placeholder="Card Number"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="form-group col-sm-4">
                    <label for="cvc">CVC</label>
                    <input
                      id="cvc"
                      type="text"
                      class="form-control"
                      placeholder="CVC"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="form-group col-sm-12">
                    <button
                      type="button"
                      class="btn btn-primary btn-block shadow"
                      style={{
                        backgroundColor: "rgb(62, 193, 213)",
                        border: "none",
                      }}
                      onClick={()=>{alert("we will add buy feature soon")}}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;
