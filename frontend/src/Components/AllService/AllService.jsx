import "./AllService.css";

function AllService() {
  return (
    <div className="all-service">
      <div className="top">
        <img src="assets/service-details-section.png" alt="" />
        <div className="list">
          <div className="title">All Service</div>
          <ul>
            <li>
              <img src="assets/icons/checkmark-orange.svg" alt="" />
              <span>Quality of an existing</span>
            </li>
            <li>
              <img src="assets/icons/checkmark-blue.svg" alt="" />
              <span>Agency best service</span>
            </li>
            <li>
              <img src="assets/icons/checkmark-red.svg" alt="" />
              <span>Dedicate product best</span>
            </li>
            <li>
              <img src="assets/icons/checkmark-green.svg" alt="" />
              <span>Team can help achieve</span>
            </li>
            <li>
              <img src="assets/icons/checkmark-pink.svg" alt="" />
              <span>Your business goals</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AllService;
