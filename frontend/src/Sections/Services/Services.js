import React from "react";
import Title from "../../Components/Title/Title";
import SingleServices from "../../Components/SingleSevices/SingleServices";
import "./Services.css";
import SubTitle from "../../Components/SubTitle/SubTitle";

export default function Services() {
  return (
    <div className="container-of-services">
      <div className="sub-sub">
        <SubTitle subTitle="Our Flexibility Service" />
      </div>
      <Title title="Our Best Service Solution" buttonType="title-container2" />
      <SingleServices />
    </div>
  );
}
