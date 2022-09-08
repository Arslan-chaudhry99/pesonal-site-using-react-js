import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./components/style.css";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
const Single = () => {
  let { name } = useParams();
  const [data, setdata] = useState([]);
  let blurState = useRef("");
  let lodingStge = useRef("");
  const getBlogData = async () => {
    blurState.current.style.filter = "blur(25px)";
    lodingStge.current.style.display = "flex";
    try {
      let data = await fetch(
        `https://script.google.com/macros/s/AKfycbxsYMRnVjifb3omcrD3Xc-DFD_1yB-nuoIR4CaqMPXdiCrbzj9p-VVfG_F5Qi0vjF1i/exec`
      );
      let actualData = await data.json();

      let arr = actualData.data.filter((elemen) => {
        return elemen.id == name;
      });

      setdata(arr);
      if (arr) {
        blurState.current.style.filter = "blur(0px)";
        lodingStge.current.style.display = "none";
      }
    } catch (error) {
      alert("please check your internet connection.");
      blurState.current.style.filter = "blur(0px)";
      lodingStge.current.style.display = "none";
    }
  };
  console.log(data);
  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <>
      <div className="single_loder" ref={lodingStge}>
        <div class="spinner-border" role="status"></div>
        <h4>Please wait....</h4>
      </div>

      <div className="container mt-5 " ref={blurState}>
        <div className="row">
          {data.map((content) => {
            return (
              <>
                <div className="col-lg-8">
                  <article>
                    <header className="mb-4">
                      <span className="fw-bolder mb-1 postTitle">
                        {content.name}
                      </span>

                      <div className="text-muted fst-italic mb-2">
                        Posted on January 1, 2022{" "}
                      </div>
                    </header>

                    <section className="mb-5">
                      <p className="fs-5 mb-4 descriptionPara">
                        {content.description}
                      </p>
                    </section>
                    <div className="footer-icons">
                      <ul>
                        <li>
                          <a href="https://github.com/Arslan-chaudhry99">
                            <FaGithub />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/lets_go_to_online/">
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a href="https://stackoverflow.com/users/16726871/arslan-chaudhry">
                            <FaStackOverflow />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/arslan-chaudhry-a56aaa219/">
                            <FaLinkedin />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Single;
