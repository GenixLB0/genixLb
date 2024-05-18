import "./ReadyToGetStartedBanner.css";

function ReadyToGetStartedBanner() {
  return (
    <div className="ready-to-get-started">
      <img
        className="cyan-circle"
        src="assets/icons/cyan-half-circle.svg"
        alt=""
      />
      <img
        className="purple-circle"
        src="assets/icons/purple-half-circle.svg"
        alt=""
      />
      <div className="main">
        <div className="title">Ready To Get Started of Strategy Business.</div>
        <div className="body">
          Softewer being able to crank out videos consistently, localize this
          them for different regions, and still save resources, time, has been a
          game change
        </div>
        <div className="holder">
          <div className="circle"></div>
          <div className="info">
            <span>Manage Your Software</span>
            <span>App Design, Website</span>
          </div>
        </div>
      </div>
      <button>Get Started Now</button>
    </div>
  );
}

export default ReadyToGetStartedBanner;
