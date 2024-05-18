import "./AppsStore.css";

function AppsStore() {
  return (
    <div className="apps-store">
      <div className="left">
        <div className="top-tag">Apps Store</div>
        <div className="title">Save This Managing About Media For Business</div>
        <div className="body">
          Softewer being able to crank out videos consistently, localize this
          them for different regions, and still save resources, time, energy has
          been a game change
        </div>
        <div className="buttons">
          <div className="app-store">
            <img src="assets/icons/apple.svg" alt="" />
            <span>App Store</span>
          </div>
          <div className="play-store">
            <img src="assets/icons/cloud.svg" alt="" />
            <span>Play Store</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppsStore;
