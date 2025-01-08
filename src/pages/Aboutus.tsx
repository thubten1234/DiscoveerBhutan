import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Aboutus() {
  return (
    <>
      <Navbar />
      <div className="intro-banner">
        <img
          src="./image/Banner.webp"
          className="img-fluid intro-banner-image"
          alt="intro-banner"
        />
        <h1 className="intro-banner-title">ABOUT US</h1>
      </div>
      {/* Main Banner Section */}
      <div className="aboutus-banner">
        <img src="/image/grid-gallery-012.jpg" alt="About Us Banner" />
        <div className="aboutus-banner-overlay ">
          <div className="aboutus-banner-content">
            <h2>A culture of thinkers & makers.</h2>
            <p>
              Discover Bhutan Holidays was founded to inspire unforgettable
              journeys. Based in Bhutan, our mission is to highlight the
              country's unparalleled beauty, culture, and traditions. Whether
              you're seeking peaceful retreats or thrilling adventures, our team
              ensures your experience is seamless, meaningful, and sustainable.
            </p>
            <p>
              At our core, we are dedicated to preserving Bhutan's essence
              through sustainable and responsible tourism, ensuring the journey
              resonates with every traveler.
            </p>

            <p>
              Whether you are seeking spiritual serenity, thrilling adventures,
              or cultural immersion, Discover Bhutan Holidays is here to make
              your dream journey a reality and a lifetime memory. Let’s explore
              the land of happiness together – Let’s make an unforgettable
              moment together.
            </p>
          </div>
        </div>
      </div>

      <div className="aboutus-extra">
        <h3>Uncovering Hidden Gems of Bhutan</h3>
        <div className="extra-grid">
          <div className="extra-card">
            <h4>Authentic Bhutanese Experiences</h4>
            <p>
              At Discover Bhutan Holidays, our mission is to provide exclusive
              access to Bhutan’s hidden gems. From remote monasteries to
              traditional villages, our knowledgeable local expert guides ensure
              you experience the authentic Bhutanese way of life.
            </p>
          </div>
          <div className="extra-card">
            <h4>Personalized Service</h4>
            <p>
              We pride ourselves on our client-focused approach, ensuring every
              detail of your trip is designed around your preferences and
              interests. Whether you seek cultural exploration, spiritual
              retreats, or adventure tourism, every journey is tailored to your
              desires.
            </p>
          </div>
          <div className="extra-card">
            <h4>Luxury and Comfort</h4>
            <p>
              Experience the best of Bhutan in style with our premium
              accommodations. We ensure that your stay is as comfortable and
              luxurious as possible, providing you with an unforgettable
              experience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
