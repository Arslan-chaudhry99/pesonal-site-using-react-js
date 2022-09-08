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
const Books = () => {
  const {AddTo} = useContext(AppContext);
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
  let loding = useRef("");

  // go to cart button
  const goto = () => {
    nav("/Cart");
  };

  return (
    <>
      <div className="row " style={{ marginTop: "10px" }}>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="section-headline text-center">
            <h2>Books Shop</h2>
          </div>
        </div>
      </div>

      <div className="lodingBooks" ref={loding}>
        <div class="spinner-border" role="status"></div>
        <h4>Please wait....</h4>
      </div>

      <div ref={croser}>
        <div className=" shadow go_to_cart" onClick={goto}>
          <i class="bi bi-cart-check text-white"></i>
        </div>

        <Carousel responsive={responsive} className="container">
          {Data.map((element) => {
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
                        <input
                          type="text"
                          value={1}
                          style={{ display: "none" }}
                        />
                        <div class="box-down">
                          <div class="h-bg">
                            <div class="h-bg-inner"></div>
                          </div>

                          <a class="cart">
                            <span class="price">{element.price + "$"}</span>

                            <span
                              class="add-to-cart btn btn-sm"
                              style={{ backgroundColor: "#3EC1D5" }}
                              onClick={()=>{ AddTo(element)}}
                            >
                              <span class="txt">
                                ADD TO CART <FaShoppingCart />
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
