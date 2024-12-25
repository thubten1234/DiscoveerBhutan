import "../App.css";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <img src="/image/Banner.png" alt="Banner" className="img-fluid" />
      </div>

      <div className="banner-text position-absolute top-50 start-50 translate-middle text-center text-white">
        <Container>
          <h1 className="display-1 display-sm-2 display-md-3 display-lg-4">
            DISCOVER BHUTAN
          </h1>
          <h6 className="lead">
            A Land of Mystical Beauty, Timeless Traditions, and Adventures.
          </h6>
        </Container>
      </div>
      <div className="intro-01">
        {/*Culture & Cuisine Section*/}
        <div className="container my-5">
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="image-container flex-shrink-0 mb-4 mb-md-0">
              <img
                src="/image/spacer-div-001.png"
                alt="Description"
                className="custom-img-size"
              />
            </div>

            <div className="text-container">
              <h1>Experience Bhutan's Rich Culture and Cuisine</h1>
              <p className="lead">
                Immerse yourself in Bhutan's vibrant culture and savor its
                unique cuisine. Witness colorful festivals, explore ancient
                monasteries, and connect with the warmth of local traditions.
                Relish authentic Bhutanese dishes like Ema Datshi and Suja,
                offering a perfect blend of flavor and heritage. Experience the
                harmony of tradition and taste in every moment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Background Info */}
      <div className="info">
        <img
          src="/image/background-01.png"
          alt="background-div-01"
          className="bgimg-01 "
        />
        <div className="Description-01 position-absolute top-50 start-50 translate-right  text-center text-white">
          <Container>
            <h3 className="heading-responsive display-4 display-sm-5 display-md-6 display-lg-7">
              Experience the Magic of Bhutan
            </h3>
            <p className="text-responsive lead">
              Journey through Bhutan’s stunning landscapes, rich culture, and
              spirituality. Visit iconic sites like Tiger's Nest and Punakha
              Dzong, trek the Himalayas, and experience vibrant festivals and
              traditional cuisine. Bhutan offers a unique blend of adventure,
              culture, and tranquility.
            </p>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;
