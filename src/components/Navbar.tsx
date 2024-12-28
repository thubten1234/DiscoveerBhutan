import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [atTop, setAtTop] = useState(true);

  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    // Check if the user is at the top of the page
    if (currentScroll === 0) {
      setAtTop(true);
    } else {
      setAtTop(false);
    }

    if (currentScroll > lastScrollTop) {
      setScrollingUp(false); // Scrolling down
    } else {
      setScrollingUp(true); // Scrolling up
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="banner">Your Banner Here</div>
      <header
        className={`navbar ${
          scrollingUp ? "navbar-visible" : "navbar-hidden"
        } ${atTop ? "navbar-top" : ""}`}
      >
        <div className="container">
          <a href="#" className="logo">
            Logo
          </a>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
