import React, { useState } from 'react';
import './faq.css';

export const Faq = () => {
  const [language, setLanguage] = useState('en');

  const faqData = {
    en: [
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
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un service de livraison de kits repas?',
        answer: 'Un service de livraison de kits repas livre des ingrédients pré-dosés et des recettes directement à votre porte, facilitant la préparation de repas faits maison sans les tracas des courses.'
      },
      {
        question: 'Comment puis-je m\'inscrire?',
        answer: 'L\'inscription est simple ! Rendez-vous sur notre site Web, sélectionnez un plan de repas qui vous convient, puis suivez les étapes pour créer un compte et définir vos préférences de livraison.'
      },
      {
        question: 'Que faire si j\'ai des restrictions alimentaires?',
        answer: 'Nous proposons une variété de plans de repas pour répondre à différents besoins alimentaires, y compris des options végétariennes, sans gluten et faibles en glucides. Vous pouvez personnaliser vos préférences dans les paramètres de votre compte.'
      },
      {
        question: 'Puis-je sauter une livraison ou mettre ma souscription en pause?',
        answer: 'Oui, vous pouvez facilement sauter une livraison ou mettre votre abonnement en pause via les paramètres de votre compte. Nous comprenons que parfois vous avez besoin d\'une pause, et nous avons simplifié la gestion de vos livraisons.'
      },
      {
        question: 'Où effectuez-vous les livraisons?',
        answer: 'Nous livrons dans la plupart des endroits du pays. Pour vérifier si nous livrons dans votre région, entrez votre code postal lors du processus d\'inscription ou sur notre page de livraison.'
      },
      {
        question: 'Les ingrédients sont-ils frais?',
        answer: 'Absolument ! Nous sélectionnons des ingrédients frais et de haute qualité pour tous nos kits de repas. Chaque livraison est emballée pour garantir que les ingrédients arrivent frais et prêts à cuire.'
      },
      {
        question: 'Quel est le coût d\'un abonnement aux kits de repas?',
        answer: 'Le coût varie en fonction du plan de repas que vous choisissez et du nombre de portions par repas. Vous pouvez consulter les tarifs détaillés sur notre site Web dans la section "Plans et Tarifs".'
      }
    ]
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setFormSubmitted(false);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="faq-container">
      <div className='wrap-faq'>
        <button onClick={handleLanguageToggle} className="language-toggle">
          {language === 'en' ? 'Français' : 'English'}
        </button>
        <h2>{language === 'en' ? 'ASK US ANYTHING' : 'POSEZ-NOUS TOUTE QUESTION'}</h2>
        {faqData[language].map((faq, index) => (
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
      <div className="contact-form-container">
        <h2>{language === 'en' ? 'STILL HAVE QUESTIONS?' : 'VOUS AVEZ ENCORE DES QUESTIONS?'}</h2>
        {formSubmitted ? (
          <div style={{ padding: "20px 10% 20px 10%" }}>
            <p>{language === 'en' ? 'Thank you for reaching out! We will get back to you soon.' : 'Merci de nous avoir contactés ! Nous vous répondrons bientôt.'}</p>
            <button
              onClick={handleResetForm}
              style={{
                backgroundColor: 'black',
                color: 'white',
                fontSize: '20px',
                margin: '0',
                borderRadius: '5px',
                width: '100%',
                padding: '10px',
                border: 'solid black 1px',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#ffa41c';
                e.currentTarget.style.color = 'black';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'black';
                e.currentTarget.style.color = 'white';
              }}
            >
              {language === 'en' ? 'New Submission' : 'Nouvelle Soumission'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: "20px 10% 20px 10%" }}>
            <p>{language === 'en' ? 'Fill out our contact form to get in touch with a customer representative.' : 'Remplissez notre formulaire de contact pour entrer en contact avec un représentant du service client.'}</p>
            <div className="form-group" style={{ paddingBottom: "20px", margin: '0' }}>
              <label htmlFor="name" style={{ textAlign: "left", fontWeight: "500", display: 'block', marginBottom: '5px' }}>
                {language === 'en' ? 'Enter Your Name' : 'Entrez Votre Nom'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={language === 'en' ? 'your name' : 'votre nom'}
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{ width: 'calc(100% - 18px)', padding: '8px', border: '1px solid #ccc', borderRadius: '0' }}
              />
            </div>
            <div className="form-group" style={{ paddingBottom: "20px", marginBottom: '0' }}>
              <label htmlFor="email" style={{ textAlign: "left", fontWeight: "500", display: 'block', marginBottom: '5px' }}>
                {language === 'en' ? 'Enter Your Email' : 'Entrez Votre Email'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={language === 'en' ? 'your email' : 'votre email'}
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{ width: 'calc(100% - 18px)', padding: '8px', border: '1px solid #ccc', borderRadius: '0' }}
              />
            </div>
            <div className="form-group" style={{ paddingBottom: "20px", marginBottom: '0' }}>
              <label htmlFor="message" style={{ textAlign: "left", fontWeight: "500", display: 'block', marginBottom: '5px' }}>
                {language === 'en' ? 'Send Us A Message' : 'Envoyez-Nous Un Message'}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={language === 'en' ? 'your message...' : 'votre message...'}
                value={formData.message}
                onChange={handleInputChange}
                required
                style={{ width: 'calc(100% - 18px)', height: "100px", padding: '8px', border: '1px solid #ccc', borderRadius: '0' }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: 'black',
                color: 'white',
                fontSize: '20px',
                borderRadius: '5px',
                width: '100%',
                border: 'solid black 1px',
                cursor: 'pointer',
                margin: '0',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#ffa41c';
                e.currentTarget.style.color = 'black';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'black';
                e.currentTarget.style.color = 'white';
              }}
            >
              {language === 'en' ? 'Send' : 'Envoyer'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
