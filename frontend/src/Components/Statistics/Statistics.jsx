import "./Statistics.css";

function Statistics() {
  return (
    <div className="statistics">
      <div className="stat">
        <div className="circle yellow"></div>
        <div className="number">56k+</div>
        <div className="name">Happy Clients</div>
      </div>
      <div className="stat">
        <div className="circle pink"></div>
        <div className="number">322k</div>
        <div className="name">Customer Ratings</div>
      </div>
      <div className="stat">
        <div className="circle red"></div>
        <div className="number">79k+</div>
        <div className="name">Project Delivered</div>
      </div>
      <div className="stat">
        <div className="circle green"></div>
        <div className="number">186+</div>
        <div className="name">Business Award</div>
      </div>
    </div>
  );
}

export default Statistics;
