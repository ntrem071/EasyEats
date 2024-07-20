import React, { useState, useEffect } from 'react';
import './Recipes.css';
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { recipeCardsData } from './recipeCardsData.jsx'; 


export const Recipes = () => {

  const [openIndexes, setOpenIndexes] = useState({ 0: true, 1: true, 2: true, 3: true});
  const [selectedOptions, setSelectedOptions] = useState({
    checkboxes: [],
    radio: 'none',
    checkboxes2: [],
    rating: 0,
  });

const RecipeCard = ({ recipe }) => {
  return (
      <div className="user-card">
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <div className="rating">{recipe.rating}</div>
          <NavLink to={recipe.link}>See Recipe</NavLink>
          <div className="duration">{recipe.duration}</div>
      </div>
  );
};

const cardsPerPage = 6;
const [currentPage, setCurrentPage] = useState(1);

const matchesRating = (recipe) => 
  selectedOptions.rating === 0 || recipe.numStars >= selectedOptions.rating;

const matchesAllergies = (recipe) => 
  selectedOptions.checkboxes.every(allergy => !recipe.allergy.includes(allergy));

const matchesDietary = (recipe) => 
  selectedOptions.radio === 'none' || recipe.diet.includes(selectedOptions.radio);

const matchesCuisine = (recipe) => {
  const cuisines = Array.isArray(recipe.cuisine) ? recipe.cuisine : [recipe.cuisine];
  return selectedOptions.checkboxes2.length === 0 ||
    cuisines.some(cuisine => selectedOptions.checkboxes2.includes(cuisine));
};

const [searchQuery, setSearchQuery] = useState('');
const filteredRecipes = recipeCardsData.filter(recipe => 
  (recipe.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
  recipe.ingredientList.some(ingredient => ingredient.toLowerCase().startsWith(searchQuery.toLowerCase()))) &&
  matchesRating(recipe) &&
  matchesAllergies(recipe) &&
  matchesDietary(recipe) &&
  matchesCuisine(recipe)
);

useEffect(() => {
  const numberOfPages = Math.ceil(filteredRecipes.length / cardsPerPage);
  if (currentPage > numberOfPages) {
    setCurrentPage(numberOfPages || 1);
  }
}, [filteredRecipes, currentPage]);

const handleSearchChange = (event) => {
  setSearchQuery(event.target.value);
};


const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const currentCards = filteredRecipes.slice(indexOfFirstCard, indexOfLastCard);
const numberOfPages = Math.ceil(filteredRecipes.length / cardsPerPage);

const paginate = (pageNumber) => setCurrentPage(pageNumber);




  const handleAccordionClick = (index) => {
    setOpenIndexes((prevIndexes) => ({
      ...prevIndexes,
      [index]: !prevIndexes[index]
    }));
  };

  const handleLinkRating = (rating) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      rating: rating,
    }));
  };
  
  const clearLinkRating = () => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      rating: 0,
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

  const handleCheckboxChange2 = (event) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevOptions) => {
      if (checked) {
        return { ...prevOptions, checkboxes2: [...prevOptions.checkboxes2, name] };
      } else {
        return {
          ...prevOptions,
          checkboxes2: prevOptions.checkboxes2.filter(option => option !== name)
        };
      }
    });
  };

  return (
    <body className='recipes'>
      <h2>BROWSE OUR MEALS</h2>
      <p>
        See our wide array of recipes and cuisines to help with your meal prep.
      </p> 
      <div className='wrap-selection'>
        <div className="lp">
          <div className="accordion">

          <div className="accordion-item">
            <div className="accordion-title" onClick={() => handleAccordionClick(3)}>
              <h3>Rate Our Service</h3>
              <span>{openIndexes[3] ? '-' : '+'}</span>
            </div>
            <div className={`accordion-content ${openIndexes[3] ? 'open' : ''}`}>
              <div className="star-rating-links">
                {selectedOptions.rating === 0 ? (
                  [1, 2, 3, 4, 5].map(rating => (
                    <div
                      key={rating}
                      className={`rating-link`}
                      onClick={() => handleLinkRating(rating)}
                    >
                      {Array.from({ length: 5 }, (_, index) => (
                        <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>&#9733;</span>
                      ))}
                      <span className="rating-text">& Up</span>
                    </div>
                  ))
                ) : (
                  <div
                    className={`rating-link selected`}
                    onClick={() => handleLinkRating(selectedOptions.rating)}
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index} className={`star ${index < selectedOptions.rating ? 'filled' : ''}`}>&#9733;</span>
                    ))}
                    <span className="rating-text">& Up</span>
                  </div>
                )}
              </div>
              {selectedOptions.rating !== 0 && (
                <a className="clear-rating-link" onClick={clearLinkRating}>Clear Rating</a>
              )}
            </div>
          </div>
            
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
                      value="Vegan"
                      checked={selectedOptions.radio === 'Vegan'}
                      onChange={handleRadioChange}
                    />
                    Vegan
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="diet"
                      value="Vegetarian"
                      checked={selectedOptions.radio === 'Vegetarian'}
                      onChange={handleRadioChange}
                    />
                    Vegetarian
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="diet"
                      value="Pescatarian"
                      checked={selectedOptions.radio === 'Pescatarian'}
                      onChange={handleRadioChange}
                    />
                    Pescatarian
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="diet"
                      value="Keto"
                      checked={selectedOptions.radio === 'Keto'}
                      onChange={handleRadioChange}
                    />
                    Keto
                  </label>
                </form>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-title" onClick={() => handleAccordionClick(2)}>
                <h3>Cuisine</h3>
                <span>{openIndexes[2] ? '-' : '+'}</span>
              </div>
              <div className={`accordion-content ${openIndexes[2] ? 'open' : ''}`}>
                <form className="form-options">
                  <label>
                    <input
                      type="checkbox"
                      name="Mexican"
                      checked={selectedOptions.checkboxes2.includes('Mexican')}
                      onChange={handleCheckboxChange2}
                    />
                    Mexican
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="Italian"
                      checked={selectedOptions.checkboxes2.includes('Italian')}
                      onChange={handleCheckboxChange2}
                    />
                    Italian
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="Indian"
                      checked={selectedOptions.checkboxes2.includes('Indian')}
                      onChange={handleCheckboxChange2}
                    />
                    Indian
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="Thai"
                      checked={selectedOptions.checkboxes2.includes('Thai')}
                      onChange={handleCheckboxChange2}
                    />
                    Thai
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="Japanese"
                      checked={selectedOptions.checkboxes2.includes('Japanese')}
                      onChange={handleCheckboxChange2}
                    />
                    Japanese
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="Greek"
                      checked={selectedOptions.checkboxes2.includes('Greek')}
                      onChange={handleCheckboxChange2}
                    />
                    Greek
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="rp2">
        <div className="search-wrapper">
          <FaSearch className='search-icon'/>
          <input 
            type="search" 
            id="search" 
            placeholder='Search recipes or ingredients...'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="user-cards-container">
            {currentCards.length > 0 ? (
              <div className="user-cards" id="user-cards">
               {currentCards.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <p className="no-results">No Results found! Please try another recipe or ingredient.</p>
            )}

          {numberOfPages > 1 && (
            <div className="pagination" id="pagination">
              {Array.from({ length: numberOfPages }).map((_, index) => (
                <button
                  key={index}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

        
      </div>
    </body>
  )
}
