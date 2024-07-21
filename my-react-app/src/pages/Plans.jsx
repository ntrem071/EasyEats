import React, { useState, useEffect } from 'react';
import './Plans.css';
import { recipeCardsData } from './recipeCardsData.jsx'; 
import { useNavigate, useLocation } from 'react-router-dom';

import { FaCheckCircle, FaHeart} from "react-icons/fa"; 


export const Plans = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isNewUser } = location.state || { isNewUser: false };

  const [openIndexes, setOpenIndexes] = useState({ 0: true, 1: true });
  const [selectedOptions, setSelectedOptions] = useState({
    checkboxes: [],
    radio: 'none'
  });
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [numberOfMeals, setNumberOfMeals] = useState(4);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee] = useState(5.99);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    let mealCost = numberOfMeals * 14.99;
    let calculatedSubtotal = numberOfPeople === 4 ? mealCost * 2 : mealCost;
    setSubtotal(calculatedSubtotal);

    let calculatedDiscount = isNewUser ? calculatedSubtotal * 0.2 : 0;
    setDiscount(calculatedDiscount);

    let calculatedTotal = calculatedSubtotal + shippingFee - calculatedDiscount;
    setTotal(calculatedTotal);
  }, [numberOfPeople, numberOfMeals, shippingFee, isNewUser]);

  const handleAccordionClick = (index) => {
    setOpenIndexes((prevIndexes) => ({
      ...prevIndexes,
      [index]: !prevIndexes[index]
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevOptions) => {
      if (checked) {
        return { ...prevOptions, checkboxes: [...prevOptions.checkboxes, name] };
      } else {
        return {
          ...prevOptions,
          checkboxes: prevOptions.checkboxes.filter(option => option !== name)
        };
      }
    });
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      radio: value
    }));
  };

  const handleSwitchChange = (value) => {
    setNumberOfPeople(value);
  };

  const handleSwitchChange2 = (value) => {
    setNumberOfMeals(value);
  };

  const handleProceedToPayment = () => {
    setShowPopup(true);
  };

  const handleCancelPayment = () => {
    setShowPopup(false);
  };

  const handleConfirmPayment = () => {
    setShowPopup(false);
    setCurrentStep(4);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const nextStep = () => {
    if (currentStep === 3) {
      setShowPopup(true);
    } else{
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleRecipeSelect = (event) => {
    const { value } = event.target;
    if (value && !selectedRecipes.includes(value)) {
      setSelectedRecipes((prevRecipes) => [...prevRecipes, value]);
    }
  };

  const handleRecipeRemove = (recipe) => {
    setSelectedRecipes((prevRecipes) => prevRecipes.filter(r => r !== recipe));
  };

  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDaySelection = (day) => {
    setSelectedDay(day);
  };

  const handleTimeSelection = (event) => {
    setSelectedTime(event.target.value);
  };


  const [completedSteps, setCompletedSteps] = useState([]);
  useEffect(() => {
    const newCompletedSteps = [];
    if (currentStep > 1) newCompletedSteps.push(1);
    if (currentStep > 2) newCompletedSteps.push(2);
    if (currentStep > 3) newCompletedSteps.push(3);
  
    setCompletedSteps(newCompletedSteps);
  }, [currentStep]);

  return (
    <div className='plans'>

      
      <h2>FARM FRESH INGREDIENTS</h2>
      <p>
        Select any dietary specifications and meal quantity. Then place an order for your meal box subscription. The registration is just that simple!
      </p> 
     
      
      <div className='wrap-containorp'>
      <div className='progress-bar'></div>
        <div className="steps-indicator">
          <div className={`step ${completedSteps.includes(1) ? 'complete' : ''} ${currentStep === 1 ? 'current' : ''}`}>
            {completedSteps.includes(1) ? (
              <FaCheckCircle className='step-icon' />
            ) : (
              <div className='step-number'>1</div>
            )}
            Customize Preferences
          </div>
          <div className={`step ${completedSteps.includes(2) ? 'complete' : ''} ${currentStep === 2 ? 'current' : ''}`}>
            {completedSteps.includes(2) ? (
              <FaCheckCircle className='step-icon' />
            ) : (
              <div className='step-number'>2</div>
            )}
            Account Details
          </div>
          <div className={`step ${completedSteps.includes(3) ? 'complete' : ''} ${currentStep === 3 ? 'current' : ''}`}>
            {completedSteps.includes(3) ? (
              <FaCheckCircle className='step-icon' />
            ) : (
              <div className='step-number'>3</div>
            )}
            Finalize Plans
          </div>
          <div className={`step ${currentStep === 4 ? 'current' : ''}`}>
            <div className='step-number'>4</div>
            Purchase Successful
          </div>
        </div>
      
      {currentStep === 1 && (
        <div className="step-1" id='step-num'>
            <div className="wrap-s1">
            <div className="fav-recipes">
            <h4>Our Menu</h4>
            <p>Select some of your favourite recipes. If the meal is in season for that week we will add it to your box!</p>
              
              <select id="recipeDropdown" className="recipeDropdown" onChange={handleRecipeSelect}>
                <option value="">None</option>
                {recipeCardsData.map((recipe, index) => (
                  <option key={index} value={recipe.title}>
                    {recipe.title}
                  </option>
                ))}
              </select>
              <div className="selected-recipes">
                <h4>Your favourites</h4>
                <ul>
                  {selectedRecipes.map((recipe, index) => (
                    <li key={index}>
                      <div className='fav-name'>
                        <FaHeart className='heart'/>
                        {recipe}
                      </div>
                       <button onClick={() => handleRecipeRemove(recipe)}>x</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="accordion">
              <div className="accordion-item">
                <div className="accordion-title" onClick={() => handleAccordionClick(0)}>
                  <h3>Allergy</h3>
                  <span>{openIndexes[0] ? '-' : '+'}</span>
                </div>
                <div className={`accordion-content ${openIndexes[0] ? 'open' : ''}`}>
                  <form className="form-options">
                    <label>
                      <input
                        type="checkbox"
                        name="Dairy"
                        checked={selectedOptions.checkboxes.includes('Dairy')}
                        onChange={handleCheckboxChange}
                      />
                      Dairy
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="Peanut & Tree Nuts"
                        checked={selectedOptions.checkboxes.includes('Peanut & Tree Nuts')}
                        onChange={handleCheckboxChange}
                      />
                      Peanut & Tree Nuts
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="Shellfish"
                        checked={selectedOptions.checkboxes.includes('Shellfish')}
                        onChange={handleCheckboxChange}
                      />
                      Shellfish
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="Fish"
                        checked={selectedOptions.checkboxes.includes('Fish')}
                        onChange={handleCheckboxChange}
                      />
                      Fish
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="Soy"
                        checked={selectedOptions.checkboxes.includes('Soy')}
                        onChange={handleCheckboxChange}
                      />
                      Soy
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="Gluten"
                        checked={selectedOptions.checkboxes.includes('Gluten')}
                        onChange={handleCheckboxChange}
                      />
                      Gluten
                    </label>
                  </form>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-title" onClick={() => handleAccordionClick(1)}>
                  <h3>Dietary Restrictions</h3>
                  <span>{openIndexes[1] ? '-' : '+'}</span>
                </div>
                <div className={`accordion-content ${openIndexes[1] ? 'open' : ''}`}>
                  <form className="form-options">
                    <label>
                      <input
                        type="radio"
                        name="diet"
                        value="none"
                        checked={selectedOptions.radio === 'none'}
                        onChange={handleRadioChange}
                      />
                      None
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="diet"
                        value="vegan"
                        checked={selectedOptions.radio === 'vegan'}
                        onChange={handleRadioChange}
                      />
                      Vegan
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="diet"
                        value="vegetarian"
                        checked={selectedOptions.radio === 'vegetarian'}
                        onChange={handleRadioChange}
                      />
                      Vegetarian
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="diet"
                        value="pescatarian"
                        checked={selectedOptions.radio === 'pescatarian'}
                        onChange={handleRadioChange}
                      />
                      Pescatarian
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="diet"
                        value="keto"
                        checked={selectedOptions.radio === 'keto'}
                        onChange={handleRadioChange}
                      />
                      Keto
                    </label>
                  </form>
                </div>
              </div>
            </div>

            </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="step-2" id='step-num'>
          <div className="account-details-container">
            <form className="account-details-form">
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Address Line 1:
                <input type="text" name="address1" required />
              </label>
              <label>
                Address Line 2:
                <input type="text" name="address2" />
              </label>
              <label>
                City:
                <input type="text" name="city" required />
              </label>
              <label>
                State/Province:
                <input type="text" name="state" required />
              </label>
              <label>
                ZIP/Postal Code:
                <input type="text" name="zip" required />
              </label>
              <label>
                Country:
                <input type="text" name="country" required />
              </label>
            </form>
            <div className="sidebar">
              <h4>Select Delivery Option</h4>
              <div className="day-buttons">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                  <button 
                    key={index} 
                    className={`day-button ${selectedDay === day ? 'selected' : ''}`} 
                    onClick={() => handleDaySelection(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <h4>Select Time</h4>
              <select className="time-dropdown" value={selectedTime} onChange={handleTimeSelection}>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="step-3" id='step-num'>
          <div className='wrap-s3'>
            <div className="wrap-switch1">
              <label>Number of People</label>
              <div className="switch-container">
                <button
                  className={`switch-button ${numberOfPeople === 2 ? 'active' : ''}`}
                  onClick={() => handleSwitchChange(2)}
                >
                  2
                </button>
                <button
                  className={`switch-button ${numberOfPeople === 4 ? 'active' : ''}`}
                  onClick={() => handleSwitchChange(4)}
                >
                  4
                </button>
              </div>
            </div>

            <div className="wrap-switch1">
              <label>Meals per Week</label>
              <div className="switch-container">
                <button
                  className={`switch-button ${numberOfMeals === 2 ? 'active' : ''}`}
                  onClick={() => handleSwitchChange2(2)}
                >
                  2
                </button>
                <button
                  className={`switch-button ${numberOfMeals === 3 ? 'active' : ''}`}
                  onClick={() => handleSwitchChange2(3)}
                >
                  3
                </button>
                <button
                  className={`switch-button ${numberOfMeals === 4 ? 'active' : ''}`}
                  onClick={() => handleSwitchChange2(4)}
                >
                  4
                </button>
                <button
                  className={`switch-button ${numberOfMeals === 5 ? 'active' : ''}`}
                  onClick={() => handleSwitchChange2(5)}
                >
                  5
                </button>
              </div>
            </div>

            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="order-details">
                <ul>
                  <li>
                    <span>Subtotal</span>
                    <span className="charge">${subtotal.toFixed(2)}</span>
                  </li>
                  <li>
                    <span>Shipping</span>
                    <span className="shipping">${shippingFee.toFixed(2)}</span>
                  </li>
                  {discount > 0 && (
                    <li>
                      <span>Discount</span>
                      <span className="discount">-${discount.toFixed(2)}</span>
                    </li>
                  )}
                  <li className="total">
                    <span>Total</span>
                    <span className="charge">${total.toFixed(2)}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='wrap-btn-pay'>
              <button className='btn-pay' onClick={handleProceedToPayment}>Proceed to Payment</button>
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className="step-4" id='step-num'>
          <div className='wrap-s4'>
            <h4>Your Purchase Was Successful!</h4>
            <p>Thank you for your purchase! Your order has been placed.</p>
            <p>Your total was ${total.toFixed(2)}. We will send you a confirmation email with the details.</p>
            <button className='btn-back-home' onClick={() => navigate('/EasyEats/')}>Back to Home</button>
          </div>
        </div>
      )}

      <div className='steps-btn'>
        <button className='btn-prev' onClick={prevStep}   disabled={currentStep === 1 || currentStep ===4}>&laquo; </button>
        <button className='btn-next' onClick={nextStep}   disabled={currentStep ===4}> &raquo;</button>
      </div>

    </div>

    {showPopup && (
      <div className='popup'>
        <div className='popup-content'>
          <span className='close' onClick={handlePopupClose}>&times;</span>
          <h2>Order Confirmation</h2>
          <p>Your total is ${total.toFixed(2)}. Proceed with payment?</p>
          <div className='popup-buttons'>
            <button className='confirm' onClick={handleConfirmPayment}>Confirm</button>
            <button className='cancel' onClick={handleCancelPayment}>Cancel</button>
          </div>
        </div>
        </div>
      
    )}
  </div>
);
};

export default Plans;
