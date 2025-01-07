import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Contactus() {
  return (
    <>
      <Navbar />
      <div className="intro-banner">
        <img
          src="./image/Banner.webp"
          className="img-fluid intro-banner-image"
          alt="intro-banner"
        />
        <h1 className="intro-banner-title">GET IN TOUCH WITH US</h1>
      </div>
      <div className="contact-div">
        <img src="./image/contact-bg.jpg" />
        <div className="contact-form-outer">
          <div className="mycontainer">
            <div className="contact-form-left">
              <h1>DISCOVER BHUTAN</h1>
              <h1>HOLIDAYS</h1>

              <p className="d-none d-sm-block">
                Let us transform your journey into a masterpiece of
                unforgettable moments.
              </p>
              <p className="d-none d-sm-block">
                Where Dreams Meet the Himalayas.
              </p>
            </div>
            <div className="contact-form-right">
              <form>
                <label>Name</label>
                <input type="text" />
                <br />
                <br />
                <label>Email</label>
                <input type="email" />
                <br />
                <br />
                <label>Enquiry</label>
                <br />
                <textarea wrap="hard"></textarea>
                <button className="contact-form-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
