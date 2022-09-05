import "./components/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Course() {
  
  const arry = [
    {
      category: "html",
      title: "HTML",
      image: "./images/coursesimg/1.png",
      description:
        "This is a complete html course with notes. Let's explore it!",
    },
    {
      category: "css",
      title: "CSS",
      image: "./images/coursesimg/2.png",
      description:
        "This is a complete css course with notes. Let's explore it!",
    },
    {
      category: "javascript",
      title: "Javascript",
      image: "./images/coursesimg/3.png",
      description:
        "This is a complete javascript course with notes. Let's explore it!",
    },
    {
      category: "react",
      title: "React JS",
      image: "./images/coursesimg/4.png",
      description:
        "This is a complete react js course with notes. Let's explore it!",
    },
    {
      category: "php",
      title: "PHP",
      image: "./images/coursesimg/5.png",
      description:
        "This is a complete php course with notes. Let's explore it!",
    },
    {
      category: "python",
      title: "Python",
      image: "./images/coursesimg/6.png",
      description:
        "This is a complete python course with notes. Let's explore it!",
    },
  ];
  // to display botton
  const [Data, setData] = useState(arry);
  const btnTitle = [
    "All",
    ...new Set(
      arry.map((elelment) => {
        return elelment.category;
      })
    ),
  ];
  // filter
  const thisData = (elelment) => {
    if (elelment === "All") {
      return setData(arry);
    }
    const filterNow = arry.filter((index) => {
      return index.category === elelment;
    });
    setData(filterNow);
  };
  return (
    <>
    
      <div id="portfolio" className="portfolio-area area-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2>Available Courses</h2>
              </div>
            </div>
          </div>
          <div className="row wesome-project-1 fix ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <ul id="portfolio-flters">
                {btnTitle.map((elelment,index) => {
                  return (
                    <>
                      <li
                        onClick={() => {
                          thisData(elelment);
                        }}
                        key={index}
                      >
                        {elelment}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="row awesome-project-content portfolio-container eas_in ">
            {Data.map((elelment, index) => {
             
              const { title, image, description,category } = elelment;

              return (
                <>
               
                  <div key={index} className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfolio-item ">
                    <div className="single-awesome-project shadow">
                      <div className="awesome-img ">
                        <a href="#">
                          <img src={image} alt="" />
                        </a>
                        <div className="add-actions text-center">
                          <div className="project-dec">
                            <a
                              className="portfolio-lightbox"
                              data-gallery="myGallery"
                              href="assets/img/portfolio/1.jpg"
                            >
                              <h4>{title}</h4>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="bottom_lines bottom_course">
                        <p>{title}</p>
                        <span>{description} </span>
                      </div>
                      <Link
                      to={"/videos/"+category}
                      >
                      <button className="btn ml-2 mb-2" style={{backgroundColor:"#3EC1D5",color:"white"}}>Watch Now</button>
                      </Link>
                    </div>
                  </div>
                  
                </>
              );
            })}
          </div>
        </div>
      </div>
    
    </>
  );
}
export default Course;