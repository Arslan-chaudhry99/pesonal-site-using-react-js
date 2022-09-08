import "./components/style.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-content">
                  <div className="footer-head">
                    <div className="footer-logo">
                      <img
                        src="./images/code.png"
                        alt=""
                        style={{ width: "70px" }}
                      />
                    </div>
                    <p>
                      Confused on which course to take? I have got you covered.
                      Browse courses and find out the best course for you. Its
                      free! Code with chaudhry is my attempt to teach basics and
                      those coding techniques to people in short time which took
                      me ages to learn.
                    </p>
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
                  </div>
                </div>
              </div>
              {/* <!-- end single footer --> */}
              <div className="col-md-4">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>information</h4>
                    <p>Contact US</p>
                    <div className="footer-contacts">
                      <p>
                        <span>Tel:</span> +92 341-5403790
                      </p>
                      <p>
                        <span>Email:</span>arslanchaudhry90111@gmail.com
                      </p>
                      <p>
                        <span>Working Hours:</span> 9am-5pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single footer --> */}
              <div className="col-md-4">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>Instagram</h4>
                    <div className="flicker-img">
                      <a >
                        <img src="./images/coursesimg/1.png" alt="" />
                      </a>
                      <a >
                        <img src="./images/coursesimg/2.png" alt="" />
                      </a>
                      <a >
                        <img src="./images/coursesimg/3.png" alt="" />
                      </a>
                      <a >
                        <img src="./images/coursesimg/4.png" alt="" />
                      </a>
                      <a >
                        <img src="./images/coursesimg/5.png" alt="" />
                      </a>
                      <a >
                        <img src="./images/coursesimg/6.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="copyright text-center">
                  <p>
                    &copy; Copyright <strong>chaudhry Develpors</strong>. All
                    Rights Reserved
                  </p>
                </div>
                <div className="credits">
                  Designed by <a href="https://www.instagram.com/lets_go_to_online/">Arslan Chaudhry</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
