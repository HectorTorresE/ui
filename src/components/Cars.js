import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import { fetchCarsSuccess } from '../redux/carsReducer';
import CarCard from './CarCard';
import { request } from '../redux/users/api';

const Cars = () => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars);
  const carProps = [];

  async function fetchData() {
    await request.get('https://bytecar.herokuapp.com/api/v1/cars').then((res) => {
      dispatch(fetchCarsSuccess(res.data));
    });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-linegit
  }, []);

  carList.forEach((car) => carProps.push(
    <div key={car.id} className="card-wrapper">
      <Link key={car.id} to="/car_details">
        <CarCard
          key={car.id}
          id={car.id}
          brand={car.brand}
          image={car.image}
          model={car.model}
          description={car.description}
        />
      </Link>
      <div className="social-media">
        <div className="logo-container"><FaFacebookSquare /></div>
        <div className="logo-container"><FaTwitter /></div>
        <div className="logo-container"><FaInstagramSquare /></div>
      </div>
    </div>,
  ));

  return (
    <>
      <div className="flex flex-col items-center text-center py-10">
        <h1 className="text-3xl font-bold mb-4">Bytecar available electric models</h1>
        <h4 className="text-2xl">Please select a model</h4>
      </div>
      <div className="lg:flex flex-row items-center py-5">
        {carProps}
      </div>
    </>
  );
};

export default Cars;
