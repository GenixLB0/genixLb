import React from "react";
import { Link } from "react-router-dom";
import LottieAnimation from "../../Components/404/LottieAnimation";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <LottieAnimation />
      <h2>Page Not Found</h2>
      <Link className="home-link" to="/">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
