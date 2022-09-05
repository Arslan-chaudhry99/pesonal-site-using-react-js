import "./components/style.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Team() {
  const team = [
    {
      name: "Arslan Chaudhry",
      skill: "Softwear Enginer",
      img: "images/team/1.jpg",
      facebook: "",
      twitter: "",
      instagram: "",
    },
    {
      name: "Arslan Ahmed",
      skill: "Softwear Enginer",
      img: "images/team/2.png",
      facebook: "",
      twitter: "",
      instagram: "",
    },
    {
      name: "Gulzaib",
      skill: "Softwear Enginer",
      img: "images/team/3.png",
      facebook: "",
      twitter: "",
      instagram: "",
    },
    {
      name: "Abdul Rehman",
      skill: "Softwear Enginer",
      img: "images/team/4.png",
      facebook: "",
      twitter: "",
      instagram: "",
    },
  ];
  return (
    <>
      <div id="team" className="our-team-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2>Our special Team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {team.map((content, index) => {
              const { name, img, skill, instagram, facebook, twitter } =
                content;
              return (
                <>
                  <div key={index} className="col-md-3 col-sm-3 col-xs-12">
                    <div className="single-team-member">
                      <div className="team-img">
                        <a href="#">
                          <img src={img} alt="" key={index} />
                        </a>
                        <div className="team-social-icon text-center">
                          <ul>
                            <li>
                              <a href="#">
                                <FaFacebook />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <FaTwitter />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <FaInstagram />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content text-center">
                        <h4>{name}</h4>
                        <p>{skill}</p>
                      </div>
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
export default Team;
