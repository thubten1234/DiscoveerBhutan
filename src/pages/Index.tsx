import "../App.css";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
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
      <div className="intro-01"></div>
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
