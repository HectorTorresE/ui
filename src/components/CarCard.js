import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCarDetails } from '../redux/fetchCarDetails';

const CarCard = ({
  id,
  brand,
  model,
  image,
  description,
}) => {
  const dispatch = useDispatch();

  CarCard.propTypes = {
    id: propTypes.number.isRequired,
    brand: propTypes.string.isRequired,
    model: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="card-wrapper"
      onClick={() => dispatch(fetchCarDetails(id))}
      onKeyDown={() => dispatch(fetchCarDetails(id))}
    >
      <div className="car-card">
        <h4 className="text-xl text-black font-bold antialised">
          {brand}
        </h4>
        <img className="card-img" src={image} alt={model} />
        <h4 className="text-xl text-black font-bold antialised">
          {model}
        </h4>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CarCard;
