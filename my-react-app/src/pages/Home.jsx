import React from 'react';
import vege from '../img/ingredients.png'; 
import c1 from '../img/c1.png';
import c2 from '../img/c2.png';
import c3 from '../img/c3.png';
import c4 from '../img/c4.png';

import { useNavigate } from 'react-router-dom'; 
import ImageSlider from "./ImageSlider";
import { TbTruckDelivery } from "react-icons/tb";
import { PiFarmFill } from "react-icons/pi";
import { GiMeal } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";

import './Home.css'; 

export const Home = () => {
  const navigate = useNavigate(); 
  const slides = [
    {url: c1, title: 'Partnered with Local Farms', text: 'Supporting our local community'}, 
    { url: c2, title: 'Freshly Harvested', text: 'Our ingredients are picked at their peak for maximum flavor and nutrition.' },
    { url: c3, title: 'Seasonal Selections', text: 'We deliver a variety of seasonal produce to keep your meals exciting and nutritious.' },
    { url: c4, title: 'Convenient Meal Kits', text: 'Enjoy easy-to-follow recipes with pre-portioned ingredients delivered to your door.' }
  ];
  const containerStyles = {
    width: "80vw",
    height: "45vw",
    margin: "0 auto",
  };

  return (
    <body className='home'>
      <div className='ad-home'>
        <div>
          <img src={vege} width="100%" alt="Vegetable Ingredients" /> 
        </div>
        <section>
          <h4>Subscribe now and get an exclusive</h4>
          <h1>20% off</h1>
          <h4>your first order!</h4>
          <br></br>
          <div className='ad-entry-points'>
            <button onClick={() => navigate('/EasyEats/plan', { state: { isNewUser: true } })}>
              New to EasyEats
            </button>
            <button onClick={() => navigate('/EasyEats/plan', { state: { isNewUser: false } })}>
              Returning User
            </button>
          </div>
        </section>
      </div>
      <div className="body-h">
        <h2>FARM FRESH INGREDIENTS</h2>
        <p>
            At Easy Eats, our mission is to connect farm and table by delivering the freshest produce and premium ingredients straight to your home. We partner with local farmers committed to sustainable and ethical farming practices, ensuring that each item in our boxes is harvested at its peak for maximum flavor and nutrition. Sourcing locally reduces the time from farm to delivery, so you receive ingredients that are as fresh as if you had picked them yourself.
        </p>
        <p>
            Our weekly meal kits, offering 2 to 5 meals, cater to individuals and families, accommodating diverse dietary needs and preferences. Each box is thoughtfully curated with seasonal ingredients and paired with easy-to-follow recipes, simplifying meal planning and making cooking enjoyable. We believe that healthy eating should be affordable and convenient. By working directly with farmers and eliminating unnecessary middlemen, we keep our costs low, passing the savings on to you. Our balanced, portion-controlled meals make it easy to maintain a nutritious diet without overspending or wasting food. Cooking with Easy Eats is effortless and enjoyable, with step-by-step recipes that guide you in preparing delicious, gourmet dishes at home. Order your first box today and experience the freshness and quality of farm-to-table dining.
        </p>

        <div className='icon-containor'>
          <div className="icon-card">
           <PiFarmFill className='icon-perk'/>
            <hr/>
            <p>Fresh, seasonal ingredients from your local farms</p>
          </div>
          <div className="icon-card">
            <TbTruckDelivery className='icon-perk'/> 
            <hr/>   
            <p>Weekly boxes delivered straight to your door</p>        
          </div>
          <div className="icon-card">
           <GiMeal className='icon-perk'/> 
           <hr/>
           <p>Custom dietary plans make meal prep easy</p>                      
          </div>
          <div className="icon-card">
           <MdOutlineAttachMoney className='icon-perk'/> 
           <hr/> 
           <p>First time user discounts for affordable eating</p>  
           <p></p>            
          </div>
        </div>

        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
    </body>
  );
};