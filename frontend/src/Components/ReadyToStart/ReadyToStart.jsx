import "./ReadyToStart.css";
import robot from '../../Images/Robot/11.png'

function ReadyToStart() {
  return (
    <div className="ready-to-start">
      <div className="left">
        <div className="title">Ready To Get Started of Strategy Business.</div>
        <div className="body">
          Softewer being able to crank out videos consistently, localize this
          them for different regions, and still save resources, time, has been a
          game change
        </div>
        <div className="container">
          <div className="circle"></div>
          <div className="content">
            <span>Mange Your Software</span>
            <span>App Design. Website</span>
          </div>
        </div>
      </div>
      <div className="right">
        <button>Get Started Now</button>
      </div>
      <div className="blue-circle"></div>
      <div className="yellow-circle"></div>
      <div className="white-bar"></div>
    </div>
  );
}

export default ReadyToStart;
