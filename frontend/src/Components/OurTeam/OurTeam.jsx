import "./OurTeam.css";

function OurTeam() {
  return (
    <div className="our-team">
      <div className="title">Our Team Messmber</div>
      <div className="sub-title">Meet The Team Member Meeting</div>
      <ul className="team-members">
        <li className="team-member">
          <div className="image-holder">
            <img src="assets/team-image.webp" alt="" width="250" />
          </div>
          <div className="name">Rotaro Mara</div>
          <div className="job-title">Founder</div>
          <div className="share-icon">
            <img src="assets/icons/share.svg" alt="" />
          </div>
        </li>
        <li className="team-member">
          <div className="image-holder">
            <img src="assets/team-image.webp" alt="" width="250" />
          </div>
          <div className="name">Rotaro Mara</div>
          <div className="job-title">Founder</div>
          <div className="share-icon">
            <img src="assets/icons/share.svg" alt="" />
          </div>
        </li>
        <li className="team-member">
          <div className="image-holder">
            <img src="assets/team-image.webp" alt="" width="250" />
          </div>
          <div className="name">Rotaro Mara</div>
          <div className="job-title">Founder</div>
          <div className="share-icon">
            <img src="assets/icons/share.svg" alt="" />
          </div>
        </li>
        <li className="team-member">
          <div className="image-holder">
            <img src="assets/team-image.webp" alt="" width="250" />
          </div>
          <div className="name">Rotaro Mara</div>
          <div className="job-title">Founder</div>
          <div className="share-icon">
            <img src="assets/icons/share.svg" alt="" />
          </div>
        </li>
      </ul>
      <div className="dots">
        <div className="1"></div>
        <div className="2 active"></div>
        <div className="3"></div>
        <div className="4"></div>
      </div>
    </div>
  );
}

export default OurTeam;
