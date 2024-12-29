import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./body.css";

const Home = () => {
  const [showButtons, setShowButtons] = useState(true);

  return (
    <section>
      <div className="home-section" id="home">
        {/* Home Content */}
        <div className="home-content">
          <div className="home-header">
            <h1 className="heading">
              Hi There! <span className="wave">👋🏻</span>
            </h1>
            <h1 className="heading-name">
              I'M <strong className="main-name">MANISH JHA</strong>
            </h1>
            <div className="typewriter-container">
              <Typewriter />
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="home-logo">
          <img
            src="https://scontent.frdp4-1.fna.fbcdn.net/v/t39.30808-6/348231807_249642317657529_6749770682651908866_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=2NR9fv5Y-qMQ7kNvgHwlAGa&_nc_zt=23&_nc_ht=scontent.frdp4-1.fna&_nc_gid=AUBJaJqDGGQaZqZ96IgBcRz&oh=00_AYDko58HKAmVurspJzM1FYBliTThnHOomlzhcXhZyPpFpg&oe=67749C8A"
            alt="home"
            className="home-img"
          />
        </div>
      </div>

      <AboutSection />
      {showButtons && (
        <div className="navigation-buttons">
          <Link to="/table" className="nav-button">
            Go to Table
          </Link>
          <Link to="/dashboard" className="nav-button">
            Go to Dashboard
          </Link>
        </div>
      )}
    </section>
  );
};

const AboutSection = () => {
  return (
    <div className="home-about-section" id="about">
      <div className="home-about-content">
        <div className="home-about-description">
          <h1 className="about-heading">
            LET ME <span className="purple">INTRODUCE</span> MYSELF
          </h1>
          <p className="home-about-body">
            I am working as the Head of Analytics at Inclusive Minds.
            <span className="purple"> Machine Learning, SQL, Python.</span>
            <br />
            I specialize in building{" "}
            <span className="purple">Web Technologies</span> and working with{" "}
            <span className="purple">AI and Data Science.</span>
          </p>
        </div>
        <div className="home-avatar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTzJ1TwVrEqyfQxcq3KQMRyb-43rhlFAdNw&s"
            alt="avatar"
            className="avatar-img"
          />
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="home-about-social">
      <h1>FIND ME ON</h1>
      <p>
        Feel free to <span className="purple">connect</span> with me
      </p>
      <ul className="social-links">
        <li>
          <a href="#" className="social-icon">
            GitHub
          </a>
        </li>
        <li>
          <a href="#" className="social-icon">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#" className="social-icon">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

const Typewriter = () => {
  return (
    <div className="typewriter">
      <span>Tech Lover</span>
    </div>
  );
};

export default Home;
