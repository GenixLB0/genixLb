import Banner from "../../Components/Banner/Banner";
import OurTeamMembersSection from "../../Components/OurTeamMembersSection/OurTeamMembersSection";
import ReadyToGetStartedBanner from "../../Components/ReadyToGetStartedBanner/ReadyToGetStartedBanner";
import Statistics2 from "../../Components/Statistics2/Statistics2";
import TeamDetailsSection from "../../Components/TeamDetailsSection/TeamDetailsSection";
import "./TeamDetails.css";

function TeamDetails() {
  return (
    <div className="team-details">
      <Banner title="Team Details" image="alt-banner-background" />
      <TeamDetailsSection />
      <Statistics2 />
      <OurTeamMembersSection />
      <ReadyToGetStartedBanner />
    </div>
  );
}

export default TeamDetails;
