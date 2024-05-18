import React from "react";
import Lottie from "react-lottie";
import animationData from "./animation.json";

function LottieAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={400} width={600} />;
}

export default LottieAnimation;
