import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
// import About from './Pages/About/About';
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import OurProject from "./Pages/OurProject/OurProject";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import TeamDetails from "./Pages/TeamDetails/TeamDetails";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import { useEffect } from "react";

function App() {
  // scroll to top on navigation
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/service" element={<Services />} />
        <Route path="/our-project" element={<OurProject />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
