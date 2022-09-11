import React, { useContext } from "react";
import "../components/book.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./context";
import Data from "./Data";
import { padding } from "@mui/system";
const Books = () => {
  const { AddTo, state } = useContext(AppContext);

  let nav = useNavigate();
  // slider
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let croser = useRef("");
  let popMessage = useRef("");
  let showNotification = () => {
    popMessage.current.style.display = "flex";
    setTimeout(() => {
      popMessage.current.style.display = "none";
    }, 5000);
  };
  let viewcart = () => {
    nav("/cart");
  };

  // go to cart button
  const goto = () => {
    nav("/Cart");
  };
  let actualLength=0
state.map((item)=>{
  actualLength += item.quantity
})

  return (
    <>
      <div className="row " style={{ marginTop: "10px" }}>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="section-headline text-center">
            <h2>Books Shop</h2>
          </div>
        </div>
      </div>

      <div
        class="toast-body  w-100 messageAli"
        style={{ position: "absolute", zIndex: "1", display: "none" }}
        ref={popMessage}
      >
        <span className="border p-2 text-dark border">
          Item is successfully add to cart.
          <span className="viewNow" onClick={viewcart}>
            click here to view!
          </span>
        </span>
      </div>

      <div ref={croser}>
        <div className=" shadow go_to_cart" onClick={goto}>
          <i
            class="bi bi-cart-check text-white "
            style={{ fontSize: "20px" }}
          ></i>
          <i className="quan bg-danger" style={{fontSize:"10px",padding:"10px"}}>{actualLength}</i>
        </div>

        <Carousel responsive={responsive} className="container">
          {Data.map((element, index) => {
            return (
              <>
                <div class="container page-wrapper">
                  <div class="page-inner">
                    <div class="row">
                      <div class="el-wrapper">
                        <div class="box-up">
                          <img class="img" src={element.image} alt="" />
                          <div class="img-info">
                            <div class="info-inner">
                              <span class="p-name text-info">
                                {element.name}
                              </span>
                              <span class="p-company ">Author:CHAUDHRY</span>
                            </div>
                            <div class="a-size ">
                              About:This is a complete book on javascript
                              <span class="size"></span>
                            </div>
                          </div>
                        </div>

                        <div class="box-down">
                          <div class="h-bg">
                            <div class="h-bg-inner"></div>
                          </div>
                          <a class="cart " >
                            <span class="price">{element.price + "$"}</span>
                            <span
                              className="add-to-cart add-to-cart-align "
                              onClick={showNotification}
                            >
                              <span
                                class=" btn btn-lg "
                                style={{ backgroundColor: "#3EC1D5" }}
                                onClick={() => {
                                  AddTo(element)
                                  
                                }}
                              >
                                <span class="txt " >
                                  ADD TO CART <FaShoppingCart  />
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Books;
