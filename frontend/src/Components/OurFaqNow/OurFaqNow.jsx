import { useState } from "react";
import "./OurFaqNow.css";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";

// FAQItem component
const FAQItem = ({ question, answer, expanded, onClick, color, index }) => {
  return (
    <div className={`faq-item ${expanded ? "expanded" : ""}`}>
      <div
        className="our-faq-title-container"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <div className="question-container">
          <img
            src={`${
              expanded
                ? `assets/icons/checkmark-white.svg`
                : `assets/icons/checkmark-${color}.svg`
            }`}
            alt=""
          />
          <h3>{question}</h3>
          <div className="number">0{index + 1}</div>
        </div>
        <img
          src={`${
            expanded
              ? "assets/icons/arrow-up-white.svg"
              : `assets/icons/arrow-down-${color}.svg`
          }`}
          alt=""
        />
      </div>
      <div className="answer-container">
        <p className="answer">{answer}</p>
      </div>
    </div>
  );
};

// FAQ component
const FAQ = ({ faqData }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  // Toggle function
  const toggleItem = (index) => {
    setExpandedIndex((prevIndex) => (index === prevIndex ? null : index));
  };

  return (
    <div className="faq-list-container">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          expanded={index === expandedIndex}
          onClick={() => toggleItem(index)}
          color={item.color}
          index={index}
        />
      ))}
    </div>
  );
};

function OurFaqNow() {
  // Sample FAQ data
  const faqData = [
    {
      color: "orange",
      question: "Maecenas facilisis erat id odio",
      answer:
        "There are many variations of passages of is psum the majority have suffered alteration in some we by injected humour.",
    },
    {
      color: "blue",
      question: "Phasellus et vehicula nulla",
      answer:
        "There are many variations of passages of is psum the majority have suffered alteration in some we by injected humour.",
    },
    {
      color: "red",
      question: "Maecenas malesuada",
      answer:
        "There are many variations of passages of is psum the majority have suffered alteration in some we by injected humour.",
    },
    {
      color: "green",
      question: "Why you join our team",
      answer:
        "There are many variations of passages of is psum the majority have suffered alteration in some we by injected humour.",
    },
    {
      color: "pink",
      question: "Maecenas malesuada",
      answer:
        "There are many variations of passages of is psum the majority have suffered alteration in some we by injected humour.",
    },
  ];

  return (
    <div className="our-faq-now">
      <SubTitle subTitle="Our FAQ Now" />
      <Title title="General Ask For The Questions" />
      <div className="container-top">
        <div className="left">
          <img src="assets/faq.webp" alt="" />
        </div>
        <div className="right">
          <FAQ faqData={faqData} />
        </div>
      </div>
      <div className="container-bottom">
        <div className="left">
          <div className="square"></div>
          <div className="content">
            <div className="title">Digital Software Data.</div>
            <div className="body">
              Lorem ipsum dolor sit amet, consectetur be there tempor incididunt
              ut aliqua. .
            </div>
          </div>
        </div>
        <div className="right">
          <div className="square"></div>
          <div className="content">
            <div className="title">Advertising and Marketing</div>
            <div className="body">
              Lorem ipsum dolor sit amet, consectetur be there tempor incididunt
              ut aliqua. .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFaqNow;
