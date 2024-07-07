import React, { useState } from 'react';
import './faq.css';

export const Faq = () => {
  const faqData = [
    {
      question: 'What is a Meal Kit Delivery Service?',
      answer: 'A Meal Kit Delivery Service delivers pre-portioned ingredients and recipes to your doorstep, making it easy to cook fresh, homemade meals without the hassle of grocery shopping.'
    },
    {
      question: 'How do I sign up?',
      answer: 'Signing up is simple! Just visit our website, select a meal plan that suits your needs, and follow the steps to create an account and set your delivery preferences.'
    },
    {
      question: 'What if I have dietary restrictions?',
      answer: 'We offer a variety of meal plans to accommodate different dietary needs, including vegetarian, gluten-free, and low-carb options. You can customize your preferences in your account settings.'
    },
    {
      question: 'Can I skip a delivery or pause my subscription?',
      answer: 'Yes, you can easily skip a delivery or pause your subscription through your account settings. We understand that sometimes you need a break, and we’ve made it simple to manage your deliveries.'
    },
    {
      question: 'Where do you deliver?',
      answer: 'We deliver to most locations within the country. To check if we deliver to your area, enter your zip code during the sign-up process or on our delivery page.'
    },
    {
      question: 'Are the ingredients fresh?',
      answer: 'Absolutely! We source high-quality, fresh ingredients for all our meal kits. Each delivery is packed to ensure the ingredients arrive fresh and ready to cook.'
    },
    {
      question: 'What is the cost of a meal kit subscription?',
      answer: 'The cost varies based on the meal plan you choose and the number of servings per meal. You can view detailed pricing on our website under the "Plans & Pricing" section.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>ASK US ANYTHING</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'faq-question-active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            {faq.question}
            <span className="faq-toggle-icon">
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
