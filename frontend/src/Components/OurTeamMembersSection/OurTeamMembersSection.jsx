import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import "./OurTeamMembersSection.css";

function OurTeamMembersSection() {
  return (
    <div className="our-team-members-section">
      <SubTitle subTitle="Our Team Member" />
      <Title title="Meet The Team Member Metting" />
      <div className="team-holder">
        <div className="member">
          <img src="assets/team-img-1.png" alt="" />
          <div className="member-info">
            <div className="name">Morata Baram</div>
            <div className="job-title">Founder</div>
            <div className="share">
              <img src="assets/icons/share.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="member">
          <img src="assets/team-img-2.png" alt="" />
          <div className="member-info">
            <div className="name">Lataro Marat</div>
            <div className="job-title">Manager</div>
            <div className="share">
              <img src="assets/icons/share.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="member">
          <img src="assets/team-img-3.png" alt="" />
          <div className="member-info">
            <div className="name">Rotaro Mara</div>
            <div className="job-title">Founder</div>
            <div className="share">
              <img src="assets/icons/share.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="member">
          <img src="assets/team-img-4.png" alt="" />
          <div className="member-info">
            <div className="name">Sarta Laton</div>
            <div className="job-title">Team Leader</div>
            <div className="share">
              <img src="assets/icons/share.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeamMembersSection;
