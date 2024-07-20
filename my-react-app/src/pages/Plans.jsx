import React, { useState, useEffect } from 'react';
import './Plans.css';

export const Plans = () => {
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

  // State for popup
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let mealCost = numberOfMeals * 14.99;
    let calculatedSubtotal = numberOfPeople === 4 ? mealCost * 2 : mealCost;
    setSubtotal(calculatedSubtotal);

    let calculatedDiscount = calculatedSubtotal * 0.2;
    setDiscount(calculatedDiscount);

    let calculatedTotal = calculatedSubtotal + shippingFee - calculatedDiscount;
    setTotal(calculatedTotal);
  }, [numberOfPeople, numberOfMeals, shippingFee]);

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
    // Implement logic to proceed with payment
    setShowPopup(false);
    // Additional logic as needed
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className='plans'>
      <h2>FARM FRESH INGREDIENTS</h2>
      <p>
        Select any dietary specifications and meal quantity. Then place an order for your meal box subscription. The registration is just that simple!
      </p>
      <div className='wrap-selection'>
        <div className="lp">
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
        <div className="rp">
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
                <li>
                  <span>Discount</span>
                  <span className="discount">-${discount.toFixed(2)}</span>
                </li>
                <li className="total">
                  <span>Total</span>
                  <span className="charge">${total.toFixed(2)}</span>
                </li>
              </ul>
            </div>
          </div>
          <button className='btn-pay' onClick={handleProceedToPayment}>Proceed to Payment</button>
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
