/* Card.js */
import React from 'react';
import '../css/Card.css'; // Import your CSS file for styling

function Card({ image, name, cuisines, rating, location }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-details">
        <h2>{name}</h2>
        <p className="cuisine">{cuisines}</p>
        <div className="rating">
          <span className="star">&#9733;</span> {rating}
        </div>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i> {location}
        </p>
      </div>
    </div>
  );
}

export default Card;
