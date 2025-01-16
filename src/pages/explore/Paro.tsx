import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Paro = () => {
  return (
    <>
      <Navbar />
      <div className="intro-banner">
        <img
          src="../image/paro.webp"
          className="explore-banner-image"
          alt="intro-banner"
        />
        <h1 className="intro-banner-title">Paro</h1>
      </div>
      <div className="content-container">
        <div className="main-content">
          <h2>About Paro</h2>
          <p>
            Paro is a picturesque valley town in Bhutan, known for its rich
            history, majestic monasteries, and breathtaking landscapes. It is
            home to Bhutan’s only international airport, making it the gateway
            to this magical kingdom.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>
              Visit the sacred Tiger’s Nest Monastery (Taktsang Lhakhang).
            </li>
            <li>Discover Kyichu Lhakhang, one of Bhutan’s oldest temples.</li>
            <li>Explore the ruins of Drugyal Dzong, a historic fortress.</li>
            <li>Admire the unique architecture of Dungtse Lhakhang.</li>
            <li>Visit Ta Dzong, home to the National Museum of Bhutan.</li>
            <li>Walk across the suspension bridge near Tachog Lhakang.</li>
            <li>
              Experience the serenity of Dra Karpo, a sacred meditation site.
            </li>
            <li>
              Marvel at the grandeur of Rinpung Dzong, overlooking the valley.
            </li>
          </ul>

          <h3>How to Get There</h3>
          <p>
            Paro is the site of Bhutan's only international airport and is well
            connected by road to other major towns such as Thimphu and Punakha.
            The journey to Paro offers stunning views of terraced fields and
            traditional Bhutanese homes.
          </p>
        </div>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Western Bhutan</li>
            <li>Altitude: 2,200 meters</li>
            <li>Main Attraction: Tiger’s Nest Monastery</li>
            <li>Best Time to Visit: March to May, September to November</li>
          </ul>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56607.26183695156!2d89.4165873!3d27.4276928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1933b8d1a2a2d%3A0x6e531a7af7a19f2a!2sParo%2C%20Bhutan!5e0!3m2!1sen!2s!4v1696598011234!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paro Map"
            ></iframe>
          </div>

          <h3>Related Destinations</h3>
          <ul>
            <li>
              <Link to="/explore/thimphu" onClick={() => window.scrollTo(0, 0)}>
                Thimphu
              </Link>
            </li>
            <li>
              <Link to="/explore/punakha" onClick={() => window.scrollTo(0, 0)}>
                Punakha
              </Link>
            </li>
            <li>
              <Link
                to="/explore/bumthang"
                onClick={() => window.scrollTo(0, 0)}
              >
                Bumthang
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      {/* Image Gallery Section */}
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="/image/paro.jpg" alt="Paro 1" />
          <img src="/image/paro1.jpg" alt="Paro 2" />
          <img src="/image/paro2.jpg" alt="Paro 3" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Paro;
