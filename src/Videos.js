import "./components/style.css";
import React, { useState, useEffect } from "react";
import { FaVideo } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useRef } from "react";
function Videos() {
  let [ArrsData, setArrsData] = useState([]);
  let { name } = useParams("");
  let [playingData, setplayingData] = useState([]);
  let getData = useRef("");
  let mainElem = useRef("");
  const getJason = async () => {
    getData.current.style.display = "flex";
    mainElem.current.style.filter = "blur(50px)";
    try {
      let fea = await fetch(
        "https://script.google.com/macros/s/AKfycbz5LcaTzt-l1R6BJQvtBZYDFK7oVJmFKY2Iqs-8ZD8Vn0ZdPuRocIj2OZML0OzNeEAe/exec"
      );
      let acData = await fea.json();
      console.log(acData.shop);
      let catData = acData.data.map((items) => {
        if (items.category == name) {
          return items;
        }
        return "";
      });
      let filtData = catData.filter((items) => {
        return items != "";
      });
      setplayingData(filtData[0]);
      setArrsData(filtData);
      if (filtData) {
        getData.current.style.display = "none";
        mainElem.current.style.filter = "blur(0px)";
      }
    } catch (error) {
      alert("server not responding or please check your internet connection.");
      getData.current.style.display = "none";
      mainElem.current.style.filter = "blur(0px)";
    }
  };

  useEffect(() => {
    getJason();
  }, []);
  let { title, link, description } = playingData;

  return (
    <>
      <div className="loding_data_state" ref={getData}>
        <div class="spinner-border" role="status"></div>
        <h4>Please wait....</h4>
      </div>
      <main id="main" ref={mainElem}>
        <div className="blog-page area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-8 col-xs-12">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="single-blog">
                      <div className="single-blog-img">
                        <div dangerouslySetInnerHTML={{ __html: link }} />
                      </div>
                      <div className="blog-meta">
                        <span className="date-type">
                          <i className="bi bi-calendar"></i>2016-03-05 /
                          09:10:16
                        </span>
                      </div>
                      <div className="blog-text">
                        <h4>
                          <a>{title}</a>
                        </h4>
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 ">
                <div className="page-head-blog">
                  <div className="single-blog-page">
                    <div
                      className="left-blog border"
                      style={{ height: "500px", overflowY: "scroll" }}
                    >
                      <h4>Play List</h4>
                      <div className="recent-post">
                        {ArrsData.map((items) => {
                          return (
                            <>
                              <div
                                className="recent-single-post"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  setplayingData(items);
                                }}
                              >
                                <div
                                  className="post-img "
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    height: "70px",
                                    alignItems: "center",
                                  }}
                                >
                                  <FaVideo />
                                </div>

                                <div className="pst-content">
                                  <p>
                                    <a>{items.title}</a>
                                  </p>
                                </div>
                              </div>
                            </>
                          );
                        })}

                        <span>No more result!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Videos;
