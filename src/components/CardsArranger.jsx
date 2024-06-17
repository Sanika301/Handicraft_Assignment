// CardsArranger.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardsArranger.css'; // Assuming you have some CSS for styling

const CardsArranger = ({ products }) => {
  return (
    <div className="cards-arranger">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

CardsArranger.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

export default CardsArranger;
