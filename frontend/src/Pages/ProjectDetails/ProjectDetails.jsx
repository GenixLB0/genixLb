import Banner from "../../Components/Banner/Banner";
import ReadyToGetStartedBanner from "../../Components/ReadyToGetStartedBanner/ReadyToGetStartedBanner";
import "./ProjectDetails.css";

function ProjectDetails() {
  return (
    <div className="project-details">
      <Banner title="Project Details" image="alt-banner-background" />
      <div className="project-details-container">
        <div className="banner">
          <div className="blue-circle"></div>
          <div className="yellow-circle"></div>
          <div className="black-circle">
            <div className="data">
              <img src="assets/icons/checkmark-yellow-hollow.svg" alt="" />
              <span>Client</span> <span>: porta (USA)</span>
            </div>
            <div className="data">
              <img src="assets/icons/checkmark-blue-hollow.svg" alt="" />
              <span>Date</span> <span>: March 21, 2024</span>
            </div>
            <div className="data">
              <img src="assets/icons/checkmark-red-hollow.svg" alt="" />
              <span>Category</span> <span>: Software</span>
            </div>
            <div className="data">
              <img src="assets/icons/checkmark-green-hollow.svg" alt="" />
              <span>Location</span> <span>: London</span>
            </div>
          </div>
        </div>

        <div className="project-details-content">
          <div className="title">Project Details:</div>
          <p>
            There are many variations of passages of Lorem Ipsum Fasts There are
            many variations of passages of Lorem Ipsum Fastsby we are the fast
            to injected humour,by injected humour, or randomised coved ceilings.
            are bound to ensue; and equal blame belongs can to bo erwtg mont be
            fao go not be hie best to those who through weakness.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptate
            accusantium doloremque laudantium, totam rem aperiam eaquepsa quae
            abillo i architecto beatae vitae dicta sunt explicabo. Nemo enimpsam
            luptate quia voluptas aspernatur aut fugitdolor sit amet
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum Fasts There are
            many variations of passages of Lorem Ipsum Fastsby we are the fast
            to injected humour,by injected humour, or randomised coved ceilings.
            are bound to ensue; and equal blame belongs can to bo erwtg mont fao
            go not be hie best to those who through weakness.
          </p>
        </div>

        <div className="digital-solution">
          <div className="main">
            <div className="section-title">
              Digital Solutions Skill Projects
            </div>
            <p>
              Softewer being able to crank out videos consistently, localize
              this them for different regions, and still save resources, time,
              energy has been a game change
            </p>
            <div className="tags">
              <div className="tag">
                <img src="assets/icons/checkmark-yellow.svg" alt="" />
                <span>We a revolutionary</span>
              </div>
              <div className="tag">
                <img src="assets/icons/checkmark-blue.svg" alt="" />
                <span>Team Support</span>
              </div>
              <div className="tag">
                <img src="assets/icons/checkmark-red.svg" alt="" />
                <span>This softewer solution</span>
              </div>
              <div className="tag">
                <img src="assets/icons/checkmark-green.svg" alt="" />
                <span>Project development</span>
              </div>
            </div>
            <p>
              Softewer being able to crank out videos consistently, localize
              this them for different regions, and still
            </p>
            <button>Read More</button>
          </div>
          <img src="assets/digital-solution.jpg" alt="" />
        </div>
      </div>
      <ReadyToGetStartedBanner />
    </div>
  );
}

export default ProjectDetails;
