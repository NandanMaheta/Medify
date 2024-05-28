import React, { useState } from 'react';
import styles from "./Accordin.module.css"
import icon from "../../assests/accordionsymbol.png";
import pic from "../../assests/accordionImage.png";
import {useWidth} from "../../customhook";

const AccordionComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const {width} = useWidth();

  const handleAccordionClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const accordions = [
    { question: 'Why choose our medical for your family?', answer: 'Because We are the Best.' },
    { question: 'Why we are different from others?', answer: 'We value every Human Being regardless of its race, religion, caste, creed, gender, and sexual orientation.' },

    { question: 'Trusted & experience senior care & love', answer: 'Yes, 100% assurance for the care of our belowed patients.' },
    { question: 'How to get appointment for emergency cases ?', answer: 'Kindly contact us on our emergency care HelpLine Number: 18300 8238 9292.' },
  ];

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Top}>
        <span className={styles.line1}>Get Your Answer</span>
        <span className={styles.line2}>Frequently Asked Questions</span>
      </div>
      <div className={styles.Bottom}>
        <div className={styles.BottomLeft}>{width > 1023 ? <img src={pic} alt="" /> : <img src={pic} alt="" width="95%" height="auto"/>}</div>

        <div className={styles.container}>
      {accordions.map((accordion, index) => (
        <div key={index}>
          <div
            className={styles.accordion}
            onClick={() => handleAccordionClick(index)}
          >
            <span className={styles.Question}>{accordion.question}</span>
            <span>
              {expandedIndex === index ? '-' : (<img src={icon}/>)}
            </span>
          </div>
          <div
            className={`${styles.content} ${
              expandedIndex === index ? styles.expandedContent : ''
            }`}
          >
            {accordion.answer}
          </div>
        </div>
      ))}
    </div>
      </div>

      
    
    </div>


  );
};

export default AccordionComponent;
