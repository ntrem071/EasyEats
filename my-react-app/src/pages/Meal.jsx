import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Meal.css';
import { recipeCardsData } from './recipeCardsData.jsx'; 

export const Meal = () => {

const { id } = useParams();
const recipe = recipeCardsData.find(item => item.id === parseInt(id));

const [showReviewPopup, setShowReviewPopup] = useState(false);
const [rating, setRating] = useState(0);
const [hoverRating, setHoverRating] = useState(0); 
const [comment, setComment] = useState('');
const [reviews, setReviews] = useState([]);

const navigate = useNavigate();
const goBack = () => {
  navigate(-1);
};

const openReviewPopup = () => {
  setShowReviewPopup(true);
};

const closeReviewPopup = () => {
  setShowReviewPopup(false);
};

const handleCommentChange = (e) => {
  setComment(e.target.value);
};

const handleReviewSubmit = (e) => {
  e.preventDefault();
  const newReview = {
    rating,
    comment,
    date: new Date().toLocaleString(),
  };
  setReviews([...reviews, newReview]);
  setRating(0);
  setComment('');
  closeReviewPopup(); 
};


const handleStarClick = (star) => {
  setRating(star);
};

const handleStarMouseEnter = (star) => {
  setHoverRating(star);
};

const handleStarMouseLeave = () => {
  setHoverRating(0);
};

if (!recipe) {
  return <div>Recipe not found</div>;
}
  return (
    <body className="meal">
      <div className="page-title-recipe">
        <span className="back-arrow" onClick={goBack}>&laquo; </span>
        <h2>{recipe.title.toUpperCase()}</h2>
      </div>
      <div className="rating-wrapper">
        <p className="rating">{recipe.rating}</p>
        <a onClick={openReviewPopup} className="leave-review-link">Leave Review</a>
      </div>
      <img src={recipe.image} alt={recipe.title} />

      <div className="ingredients-nutrition-container">
        <div className="ingredients">
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="nutrition-facts">
          <h4>Nutrition Facts</h4>
          <div className='nutr-wrap'>
            <p><strong>Calories:</strong> {recipe.nutrition.calories}</p>
            <p><strong>Protein:</strong> {recipe.nutrition.protein}</p>
            <p><strong>Fat:</strong> {recipe.nutrition.fat}</p>
            <p><strong>Carbs:</strong> {recipe.nutrition.carbs}</p>
          </div>
        </div>
      </div>

      <div className='wrap-instrev'>
        <h4>Instructions</h4>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>


      {showReviewPopup && (
        <div className="review-popup">
          <div className="review-content">
            <h3>Leave a Review</h3>
            <button className="close-popup-btn" onClick={closeReviewPopup}>×</button>
            <form onSubmit={handleReviewSubmit}>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= (hoverRating || rating) ? 'filled' : ''}`}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => handleStarMouseEnter(star)}
                    onMouseLeave={handleStarMouseLeave}
                  >
                    ★
                  </span>
                ))}
              </div>
              <label>
                <textarea
                  className='comment'
                  value={comment}
                  onChange={handleCommentChange}
                  placeholder="Enter your comment here"
                ></textarea>
              </label>
              <button className=  'submit' type="submit">Submit Review</button>
            </form>
          </div>
        </div>
      )}
 <br></br>
{reviews.length > 0 && (
        <div className='wrap-instrev'>
          <div className="reviews">
            <h4>Reviews</h4>
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="star-rating2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= review.rating ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="review-date">{review.date}</p>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    
    </body>
  )
}
