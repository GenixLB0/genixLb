import AboutUs from "../../Components/AboutUs/AboutUs";
import AppsStore from "../../Components/AppsStore/AppsStore";
import Banner from "../../Components/Banner/Banner";
import News from "../../Components/News/News";
import OurFaqNow from "../../Components/OurFaqNow/OurFaqNow";
import OurTeam from "../../Components/OurTeam/OurTeam";
import ReadyToStart from "../../Components/ReadyToStart/ReadyToStart";

function About() {
  return (
    <div className="about-page">
      {/* header */}
      {/* banner */}
      <Banner title="About Page" image="alt-banner-background" />
      <AboutUs />

      {/* our best service solution */}

      <OurFaqNow />
      <AppsStore />
      <OurTeam />
      <ReadyToStart />
      <News />
      {/* footer */}
    </div>
  );
}

export default About;
