import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-section">
      <div className="left">
        <img src="assets/about-us.webp" alt="" />
      </div>
      <div className="right">
        <h4>About Us</h4>
        <div className="sub-title">
          Complete Managing About Software Business
        </div>
        <p className="content">
          Softewer being able to crank out videos consistently, localize this
          them for different regions, and still save resources, time, energy has
          been a game change
        </p>
        <div className="about-tabs">
          <div className="tab-list">
            <span className="tab active">Our Solution</span>
            <span className="tab">Our Mission</span>
            <span className="tab">Support</span>
          </div>
          <div className="content">
            Softewer being able to crank out videos consistently, this them for
            different regions, and still senergy.
          </div>
          <div className="tags">
            <div className="tag">
              <img src="assets/icons/checkmark.svg" alt="" />
              <span>We a revolutionary</span>
            </div>
            <div className="tag">
              <img src="assets/icons/checkmark.svg" alt="" />
              <span>This softewer solution.</span>
            </div>
          </div>
        </div>
        <div className="co-founder">
          <div className="flag">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <div className="details">
            <div className="name">Porata Marat</div>
            <div className="position">Co-Founder</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
