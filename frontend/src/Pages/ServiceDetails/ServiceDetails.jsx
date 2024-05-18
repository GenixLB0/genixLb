import AllService from "../../Components/AllService/AllService";
import Banner from "../../Components/Banner/Banner";
import ReadyToGetStartedBanner from "../../Components/ReadyToGetStartedBanner/ReadyToGetStartedBanner";
import ServiceDetailsSection from "../../Components/ServiceDetailsSection/ServiceDetailsSection";
import ServicesReadyToGetStartedBanner from "../../Components/ServicesReadyToGetStartedBanner/ServicesReadyToGetStartedBanner";
import Statistics from "../../Components/Statistics/Statistics";
import "./ServiceDetails.css";

function ServiceDetails() {
  return (
    <div className="service-details">
      <Banner title="Service Details" image="alt-banner-background" />
      <div className="container">
        <AllService />
        <ServiceDetailsSection />
        <Statistics />
      </div>
      <ReadyToGetStartedBanner />
    </div>
  );
}

export default ServiceDetails;
