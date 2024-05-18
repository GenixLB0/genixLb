import React, { useState } from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Title from '../Title/Title';
import './FAQComponent.css'
import plus from '../../Images/FAQ/plus.png'
import minus from '../../Images/FAQ/minus.png'
import circle from '../../Images/Robot/top-circle-1.png'
import faq from '../../Images/FAQ/chat.png'

export default function FAQComponent() {
  // Initialize state to manage visibility of each answer
  const [answersVisible, setAnswersVisible] = useState({});

  // Function to toggle visibility of a specific answer
  const toggleAnswerVisibility = (questionId) => {
    setAnswersVisible(prevState => ({
      ...prevState,
      [questionId]: !prevState[questionId]
    }));
  };

  // Function to check if answer is visible
  const isAnswerVisible = (questionId) => answersVisible[questionId];

  return (
    <div className='all-containerr-faq'>
      <div className='faq-title-container'>
        <div className='content-title-faq'>
          <div className='faq-titles-con'>
            <SubTitle subTitle='YOUR QUESTION' />
            <Title title='Frequently Asked Questions' />
          </div>
          <div className='circle-div-container2'>
            <img src={faq} alt='circle'></img>
          </div>
        </div>
        <div className='circle-div-container'>
          <img src={circle} alt='circle'></img>
        </div>

      </div>
      <div className='question-divvv'>
        {faqData.map((faqItem) => (
          <div key={faqItem.id} >
            <div onClick={() => toggleAnswerVisibility(faqItem.id)} className='container-of-faq-question'>
              <div className='faqItem-question'>{faqItem.question}</div>
              <div className='the-icon-faq'>{isAnswerVisible(faqItem.id) ? <img src={minus} alt='minus'></img> : <img src={plus} alt='plus'></img>}</div>
            </div>
            {isAnswerVisible(faqItem.id) && (
              <div className='answer-question-web'>
                {faqItem.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const faqData = [
  {
    id: 1,
    question: "What is Your pricing Structure?",
    answer: "Our pricing structure varies depending on the services you choose. Please contact us for detailed pricing information."
  },
  {
    id: 2,
    question: "How do I contact customer support?",
    answer: "You can contact our customer support team by phone at XXX-XXX-XXXX or by email at support@example.com."
  },
  {
    id: 3,
    question: "How do I contact customer support?",
    answer: "You can contact our customer support team by phone at XXX-XXX-XXXX or by email at support@example.com."
  },
  {
    id: 4,
    question: "How do I contact customer support?",
    answer: "You can contact our customer support team by phone at XXX-XXX-XXXX or by email at support@example.com."
  },
];
