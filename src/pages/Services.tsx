import "../components/Services.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Service = () => {
  const items = [
    {
      title: "Punakha ",
      description: "Experience the vibrant Punakha .",
      link: "",
      image: "./image/punakha.jpg",
    },
    {
      title: "Thimphu",
      description: "Explore the colorful celebrations of Thimphu.",
      link: "",
      image: "./image/thimphu.webp",
    },
    {
      title: "Paro",
      description: "Discover the beauty of Paro.",
      link: "",
      image: "./image/paro.webp",
    },
    {
      title: "Bumthang",
      description: "Uncover the spirituality of Bumthang’s unique festival.",
      link: "",
      image: "./image/bumthang.webp",
    },
    {
      title: "Dochula",
      description: "Immerse yourself in Dochula’s mesmerizing celebrations.",
      link: "",
      image: "./image/dochula.webp",
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
        <h1 className="intro-banner-title">EXPLORE</h1>
      </div>
      <div className="image-grid-container">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="image-grid-item"
            aria-label={item.title}
          >
            <img src={item.image} alt={item.title} className="grid-image" />
            <div className="image-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Service;
