import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery() {
  return (
    <div className="gallery">
      <h1 className="text-center">Glimpse of Bhutan</h1>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/grid-gallery-002.jpg"
            alt="Gallery Item 1"
          />
          <Carousel.Caption>
            <h3>Experience Bhutan's Beauty</h3>
            <p>Explore breathtaking landscapes and cultural heritage.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/grid-gallery-003.jpg"
            alt="Gallery Item 2"
          />
          <Carousel.Caption>
            <h3>Vibrant Festivals</h3>
            <p>Immerse yourself in Bhutan’s vibrant festivals.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/grid-gallery-004.jpg"
            alt="Gallery Item 3"
          />
          <Carousel.Caption>
            <h3>Cultural Wonders</h3>
            <p>Discover the rich spiritual heritage of Bhutan.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/grid-gallery-013.jpg"
            alt="Gallery Item 4"
          />
          <Carousel.Caption>
            <h3>Majestic Monasteries</h3>
            <p>Explore Bhutan's ancient monasteries and sacred sites.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
