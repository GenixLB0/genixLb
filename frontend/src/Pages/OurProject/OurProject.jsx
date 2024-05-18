import Banner from "../../Components/Banner/Banner";
import ReadyToGetStartedBanner from "../../Components/ReadyToGetStartedBanner/ReadyToGetStartedBanner";
import ProjectSection from "../../Sections/ProjectSection/ProjectSection";
import "./OurProject.css";

function OurProject({ width }) {
  return (
    <div className="our-project">
      <Banner title="Our Project" image="alt-banner-background" />
      <ProjectSection />

      <ReadyToGetStartedBanner />
    </div>
  );
}

export default OurProject;
