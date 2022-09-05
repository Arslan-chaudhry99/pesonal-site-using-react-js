import React from "react";
import "./components/Slider.css";
import { useNavigate } from "react-router-dom";
const Slider = () => {
  let navigate = useNavigate();
  let gotoBlog = () => {
    navigate("/Blog");
  };
  let Blogto = () => {
    navigate("/Course");
  };
  return (
    <>
      <div className="container " style={{ marginTop: "20px" }}>
        <div class="container">
          <div class="row">
            <div class="col-sm  contentHeight">
              <div>
                <span className="title">
                  Welcome to <span style={{ color: "#3EC1D5" }}>Devs</span>
                </span>
                <p>
                  Confused on which course to take? I have got you covered.
                  Browse courses and find out the best course for you. Its free!
                  Code with chaudhry is my attempt to teach basics and those
                  coding techniques to people in short time which took me ages
                  to learn.
                </p>
                <button
                  className="blogbtn"
                  onClick={() => {
                    gotoBlog();
                  }}
                >
                  Explore Blog
                </button>
                <button
                  className="corbtn"
                  onClick={() => {
                    Blogto();
                  }}
                >
                  Free Courses
                </button>
              </div>
            </div>
            <div class="col-sm   slideImage">
              <img
                src="./images/coursesimg/slider.jpg"
                alt=""
                className="imge"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
