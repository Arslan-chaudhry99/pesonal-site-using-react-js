import "./components/style.css";
function Contact() {
  return (
    <>
      <div id="contact" className="contact-area">
        <div className="contact-inner area-padding">
          <div className="contact-overly"></div>
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Contact us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- Start contact icon column --> */}
              <div className="col-md-4">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <i className="bi bi-phone"></i>
                    <p>
                      Call: +92 341-5403790
                      <br />
                      <span>Monday-Friday (9am-5pm)</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Start contact icon column --> */}
              <div className="col-md-4">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <i className="bi bi-envelope"></i>
                    <p>
                      Email: arslanchaudhry9011@gmail.com
                      <br />
                      <span>Web: www.this.com</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Start contact icon column --> */}
              <div className="col-md-4">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <i className="bi bi-geo-alt"></i>
                    <p>
                      Location: A108 Adam Street
                      <br />
                      <span>NY 535022, USA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- Start Google Map --> */}
              <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d435518.6817839112!2d74.05418918633279!3d31.483220874943807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1661363397452!5m2!1sen!2s" style={{width:"100%",height:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              {/* <!-- End Google Map -->
     
                 <!-- Start  contact --> */}
              <div className="col-md-6">
                <div className="form contact-form">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="con" type="submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
