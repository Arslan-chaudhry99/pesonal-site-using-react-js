import React, { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import "./components/style.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const Blog = () => {
  let [blogData, setblogData] = useState([]);
  let [searchValue, setsearchValue] = useState("");
  let [displayAll, setdisplayAll] = useState([]);
  let lodingddata = useRef("");
  let contentData = useRef("");

  let moreNow = useCallback(
    (title, desc) => {
      setdisplayAll([title, desc]);
    },
    [displayAll]
  );

  const getBlogData = async () => {
    lodingddata.current.style.display = "flex";
    contentData.current.style.filter = "blur(100px)";
    try {
      let data = await fetch(
        `https://script.google.com/macros/s/AKfycbxsYMRnVjifb3omcrD3Xc-DFD_1yB-nuoIR4CaqMPXdiCrbzj9p-VVfG_F5Qi0vjF1i/exec?name=${searchValue}`
      );
      let actualData = await data.json();
      searchValue == ""
        ? setblogData(actualData.data.slice(0, 4))
        : setblogData(actualData.data);

      actualData
        ? (lodingddata.current.style.display = "none")
        : (lodingddata.current.style.display = "flex");
      contentData.current.style.filter = "blur(0px)";
    } catch (error) {
      lodingddata.current.style.display = "none";
      contentData.current.style.filter = "blur(0px)";
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);
  useEffect(() => {
    getBlogData();
  }, [searchValue]);

  let empetryQuery = () => {
    alert("Please Enter your query.");
  };

  let clearAll = () => {
    setsearchValue("");
  };

  return (
    <>
      <main id="main">
        <div className="blog-page area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-8 col-xs-12">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="lodingddata" ref={lodingddata}>
                    <div class="spinner-border" role="status"></div>
                    <h4>Please wait....</h4>
                  </div>

                  <div className="search-option">
                    <input
                      type="text"
                      style={{ outline: "none", height: "100%" }}
                      placeholder="Search..."
                      onChange={(e) => {
                        setsearchValue(e.target.value);
                      }}
                      value={searchValue}
                    />
                    {searchValue == "" ? null : (
                      <span
                        className="clearSearch bg-danger shadow"
                        onClick={clearAll}
                      >
                        <i class="bi bi-x"></i>
                      </span>
                    )}
                    {searchValue ? (
                      <button
                        className="button"
                        style={{
                          float: "right",
                          cursor: "pointer",
                          width: "20%",
                        }}
                        onClick={() => {
                          getBlogData();
                        }}
                      >
                        <FaSearch />
                      </button>
                    ) : (
                      <button
                        className="button"
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={() => {
                          empetryQuery();
                        }}
                      >
                        <FaSearch />
                      </button>
                    )}
                  </div>
                </div>
                <h5 className="container ">
                  <span className="badge badge-success ml-3 shadow text-white btn filter_bage ">
                    Recent Posts
                  </span>
                  <p className="container " style={{ opacity: "0.4" }}>
                    Available Results: {blogData.length}
                  </p>
                </h5>

                <div className="row" ref={contentData}>
                  {blogData.length > 0 ? (
                    blogData.map((data, index) => {
                      return (
                        <>
                          <div
                            className="col-md-12 col-sm-12 col-xs-12 shadow mb-5 p-4 blogPostPage"
                            key={index}
                          >
                            <div className="single-blog">
                              <div className="blog-text">
                                <h4 className="blogTitle">
                                  <a>{data.name}</a>
                                </h4>
                                <span className="date-type">
                                  <i className="bi bi-calendar"></i> 2016-03-05
                                  / 09:10:16
                                </span>
                                <p className="blogPost">
                                  {data.description.slice(0, 210)}
                                  <br />

                                  <Link
                                    to={"/post-page/" + data.id}
                                    style={{
                                      textDecoration: "underline",
                                      color: "blue",
                                      cursor: "pointer",
                                    }}
                                  >
                                    read more...
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <div
                      style={{
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px",
                        flexDirection: "column",
                      }}
                    >
                      <p>
                        Your search <strong>{searchValue}</strong> did not match
                        any documents. Suggestions:
                      </p>
                      <ul>
                        <li>Make sure that all words are spelled correctly.</li>
                        <li>Try different keywords.</li>
                        <li>Try more general keywords.</li>
                        <li>Try fewer keywords.</li>
                        <li>
                          or check your internet connection and try again.
                        </li>
                      </ul>
                      <img src="./images/not.svg" alt="" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
