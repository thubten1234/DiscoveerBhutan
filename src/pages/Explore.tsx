import "../components/Services.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Explore = () => {
  const items = [
    {
      title: "Punakha",
      description: "Discover the beauty of Punakha.",
      link: "/explore/punakha",
      image: "./image/punakha.webp",
    },
    {
      title: "Thimphu",
      description: "",
      link: "/explore/thimphu",
      image: "./image/thimphu.webp",
    },
    {
      title: "Paro",
      description: "",
      link: "/explore/paro",
      image: "./image/paro.webp",
    },
    {
      title: "Bumthang",
      description: "",
      link: "/explore/bumthang",
      image: "./image/bumthang.webp",
    },
    {
      title: "Wangdue Phodrang",
      description: "",
      link: "",
      image: "./image/wangdue.webp",
    },
    {
      title: "Trongsa",
      description: "",
      link: "",
      image: "./image/trongsa.webp",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="intro-banner">
        <img
          src="./image/Banner.webp"
          className="img-fluid intro-banner-image"
          alt="intro-banner"
        />
        <h1 className="intro-banner-title">EXPLORE</h1>
      </div>
      <div className="image-grid-container">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="image-grid-item"
            aria-label={item.title}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={item.image} alt={item.title} className="grid-image" />
            <div className="image-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Explore;
