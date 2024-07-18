import React from 'react';
import { NavLink } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
  <div className="user-card">
    <img src={recipe.image} alt={recipe.title} />
    <h2>{recipe.title}</h2>
    <div className="rating">{recipe.rating}</div>
    <NavLink to={recipe.link}>See Recipe</NavLink>
    <div className="duration">{recipe.duration}</div>
  </div>
);

export default RecipeCard;