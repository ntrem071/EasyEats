import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Meal.css';

import r1 from '../img/r1.png';
import r2 from '../img/r2.png';
import r3 from '../img/r3.png';
import r4 from '../img/r4.png';
import r5 from '../img/r5.png';
import r6 from '../img/r6.png';
import r7 from '../img/r7.png';
import r8 from '../img/r8.png';

export const Meal = () => {

  const recipeCardsData = [
    {
        id: 1,
        title: 'Spaghetti Carbonara',
        image: r1,
        rating: '★★★★☆',
        link: '/meal/1',
        duration: '30 mins',
        ingredients: [
            '200g spaghetti',
            '100g pancetta',
            '2 large eggs',
            '50g pecorino cheese',
            '50g parmesan cheese',
            '2 garlic cloves, peeled and left whole',
            '50g unsalted butter',
            'Salt and freshly ground black pepper'
        ],
        instructions: [
            'Cook the spaghetti in a large pot of boiling salted water until al dente.',
            'Fry the pancetta in a pan until crispy.',
            'Beat the eggs in a bowl, then finely grate the pecorino and parmesan and add to the eggs.',
            'Drain the spaghetti, reserving some of the cooking water.',
            'Add the spaghetti to the pan with the pancetta and remove from the heat.',
            'Quickly stir in the egg and cheese mixture, adding some reserved cooking water to loosen if necessary.',
            'Season with salt and freshly ground black pepper and serve immediately.'
        ],
        nutrition: {
            calories: 450,
            protein: '20g',
            fat: '25g',
            carbs: '35g'
        }
    },
    {
        id: 2,
        title: 'Chicken Alfredo',
        image: r2,
        rating: '★★★☆☆',
        link: '/meal/2',
        duration: '45 mins',
        ingredients: [
            '200g fettuccine pasta',
            '2 chicken breasts, sliced',
            '2 tbsp olive oil',
            '1 cup heavy cream',
            '1 cup grated parmesan cheese',
            '2 garlic cloves, minced',
            'Salt and freshly ground black pepper',
            'Chopped parsley for garnish'
        ],
        instructions: [
            'Cook the fettuccine according to the package instructions and drain.',
            'Heat olive oil in a large skillet over medium-high heat.',
            'Add the chicken and cook until browned and cooked through, about 5-7 minutes.',
            'Remove the chicken from the skillet and set aside.',
            'In the same skillet, add the garlic and cook for 1 minute.',
            'Pour in the heavy cream and bring to a simmer.',
            'Stir in the parmesan cheese until melted and the sauce is smooth.',
            'Return the chicken to the skillet and add the cooked fettuccine.',
            'Toss to coat the pasta and chicken in the sauce.',
            'Season with salt and freshly ground black pepper, and garnish with chopped parsley.'
        ],
        nutrition: {
            calories: 600,
            protein: '30g',
            fat: '40g',
            carbs: '45g'
        }
    },
    {
        id: 3,
        title: 'Beef Stroganoff',
        image: r3,
        rating: '★★★★★',
        link: '/meal/3',
        duration: '40 mins',
        ingredients: [
            '500g beef sirloin, sliced into thin strips',
            '2 tbsp olive oil',
            '1 onion, finely chopped',
            '2 garlic cloves, minced',
            '250g mushrooms, sliced',
            '1 cup beef broth',
            '1 cup sour cream',
            '2 tbsp flour',
            'Salt and freshly ground black pepper',
            'Chopped parsley for garnish'
        ],
        instructions: [
            'Heat olive oil in a large skillet over medium-high heat.',
            'Add the beef strips and cook until browned, about 2-3 minutes per side.',
            'Remove the beef from the skillet and set aside.',
            'In the same skillet, add the onion and cook until softened.',
            'Add the garlic and mushrooms and cook for another 5 minutes.',
            'Sprinkle the flour over the vegetables and stir to combine.',
            'Pour in the beef broth and bring to a simmer, stirring frequently.',
            'Reduce the heat to low and stir in the sour cream.',
            'Return the beef to the skillet and cook until heated through.',
            'Season with salt and freshly ground black pepper, and garnish with chopped parsley.'
        ],
        nutrition: {
            calories: 500,
            protein: '35g',
            fat: '30g',
            carbs: '20g'
        }
    },
    {
        id: 4,
        title: 'Vegetable Stir Fry',
        image: r4,
        rating: '★★★★☆',
        link: '/meal/4',
        duration: '25 mins',
        ingredients: [
            '2 tbsp olive oil',
            '1 red bell pepper, sliced',
            '1 yellow bell pepper, sliced',
            '1 green bell pepper, sliced',
            '2 carrots, julienned',
            '1 cup broccoli florets',
            '1 cup snow peas',
            '2 garlic cloves, minced',
            '1/4 cup soy sauce',
            '2 tbsp hoisin sauce',
            '1 tsp sesame oil',
            'Sesame seeds for garnish'
        ],
        instructions: [
            'Heat olive oil in a large skillet or wok over medium-high heat.',
            'Add the garlic and cook for 1 minute.',
            'Add the bell peppers, carrots, broccoli, and snow peas and stir-fry for 5-7 minutes.',
            'Pour in the soy sauce, hoisin sauce, and sesame oil, and stir to coat the vegetables.',
            'Continue to cook for another 2-3 minutes, until the vegetables are tender-crisp.',
            'Serve immediately, garnished with sesame seeds.'
        ],
        nutrition: {
            calories: 200,
            protein: '6g',
            fat: '10g',
            carbs: '25g'
        }
    },
    {
        id: 5,
        title: 'Tacos',
        image: r5,
        rating: '★★★☆☆',
        link: '/meal/5',
        duration: '20 mins',
        ingredients: [
            '8 small corn tortillas',
            '400g ground beef or chicken',
            '1 tbsp olive oil',
            '1 onion, finely chopped',
            '2 garlic cloves, minced',
            '1 tsp chili powder',
            '1 tsp cumin',
            'Salt and freshly ground black pepper',
            '1 cup shredded lettuce',
            '1 cup diced tomatoes',
            '1 cup shredded cheese',
            'Sour cream and salsa for serving'
        ],
        instructions: [
            'Heat olive oil in a large skillet over medium-high heat.',
            'Add the onion and cook until softened.',
            'Add the garlic and cook for 1 minute.',
            'Add the ground beef or chicken, chili powder, and cumin, and cook until the meat is browned and cooked through.',
            'Season with salt and freshly ground black pepper.',
            'Warm the tortillas in a dry skillet or microwave.',
            'Fill each tortilla with the cooked meat, lettuce, tomatoes, and cheese.',
            'Serve with sour cream and salsa.'
        ],
        nutrition: {
            calories: 300,
            protein: '20g',
            fat: '15g',
            carbs: '25g'
        }
    },
    {
        id: 6,
        title: 'Caesar Salad',
        image: r6,
        rating: '★★★★☆',
        link: '/meal/6',
        duration: '15 mins',
        ingredients: [
            '2 romaine lettuce hearts, chopped',
            '1/2 cup croutons',
            '1/4 cup grated parmesan cheese',
            '1/4 cup Caesar dressing',
            '1 lemon, cut into wedges',
            'Salt and freshly ground black pepper'
        ],
        instructions: [
            'In a large bowl, combine the chopped romaine lettuce, croutons, and parmesan cheese.',
            'Drizzle with Caesar dressing and toss to coat.',
            'Season with salt and freshly ground black pepper to taste.',
            'Serve immediately with lemon wedges.'
        ],
        nutrition: {
            calories: 200,
            protein: '6g',
            fat: '15g',
            carbs: '15g'
        }
    },
    {
        id: 7,
        title: 'Baked Salmon',
        image: r7,
        rating: '★★★★★',
        link: '/meal/7',
        duration: '35 mins',
        ingredients: [
            '4 salmon fillets',
            '2 tbsp olive oil',
            '2 garlic cloves, minced',
            '1 lemon, sliced',
            'Salt and freshly ground black pepper',
            'Chopped fresh dill for garnish'
        ],
        instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Place the salmon fillets on a baking sheet lined with parchment paper.',
            'Drizzle with olive oil and sprinkle with minced garlic.',
            'Season with salt and freshly ground black pepper.',
            'Top each fillet with a slice of lemon.',
            'Bake for 20-25 minutes, or until the salmon is cooked through and flakes easily with a fork.',
            'Garnish with chopped fresh dill and serve.'
        ],
        nutrition: {
            calories: 350,
            protein: '25g',
            fat: '25g',
            carbs: '5g'
        }
    },
    {
        id: 8,
        title: 'Lasagna',
        image: r8,
        rating: '★★★☆☆',
        link: '/meal/8',
        duration: '1 hr',
        ingredients: [
            '9 lasagna noodles',
            '500g ricotta cheese',
            '2 cups shredded mozzarella cheese',
            '1/2 cup grated parmesan cheese',
            '1 egg',
            '4 cups marinara sauce',
            '500g ground beef',
            '1 onion, finely chopped',
            '2 garlic cloves, minced',
            'Salt and freshly ground black pepper',
            'Chopped fresh basil for garnish'
        ],
        instructions: [
            'Preheat the oven to 375°F (190°C).',
            'Cook the lasagna noodles according to the package instructions and drain.',
            'In a large skillet, cook the ground beef, onion, and garlic until the meat is browned and the onion is softened.',
            'Stir in the marinara sauce and season with salt and freshly ground black pepper.',
            'In a bowl, combine the ricotta cheese, 1 cup of mozzarella cheese, parmesan cheese, and egg.',
            'Spread a layer of meat sauce in the bottom of a baking dish.',
            'Arrange a layer of lasagna noodles over the sauce.',
            'Spread a layer of the ricotta mixture over the noodles.',
            'Repeat the layers, ending with a layer of meat sauce.',
            'Sprinkle the remaining mozzarella cheese over the top.',
            'Cover with foil and bake for 25 minutes.',
            'Remove the foil and bake for another 20 minutes, or until the cheese is bubbly and golden brown.',
            'Garnish with chopped fresh basil and serve.'
        ],
        nutrition: {
            calories: 600,
            protein: '30g',
            fat: '30g',
            carbs: '50g'
        }
    },
];
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
