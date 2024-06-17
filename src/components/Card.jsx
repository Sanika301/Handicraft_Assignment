// Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Assuming you have some CSS for styling

const Card = ({ product }) => {
  return (
    <div className="card">
      <div className='card-img-cont'>
      <img src={product.image} alt={product.name} className="card-image" />
      </div>
      <div className='card-content'>
        <h2 className="card-title">{product.name}</h2>
        <p className="card-description">{product.description}</p>
        <p className="card-price">${product.price}</p>
        <button className="card-button">Buy Now</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default Card;
