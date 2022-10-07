import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { createReservation } from '../redux/reservationsReducer';
import { getCars } from '../redux/carsReducer';

export default function AddReservation() {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars);

  const handleSubmit = (event) => {
    const date = event.target.querySelector('#date').value;
    const city = event.target.querySelector('#city').value;
    const carID = event.target.querySelector('#carID').value;
    const { user } = JSON.parse(localStorage.getItem('user')) ? (JSON.parse(localStorage.getItem('user'))) : ([]);

    const data = new FormData();
    data.append('date', date);
    data.append('city', city);
    data.append('car_id', carID);

    dispatch(createReservation(data, user));
  };

  useEffect(() => {
    dispatch(getCars());
  }, []);

  if (JSON.parse(localStorage.getItem('user'))) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Add Reservation</h1>
        <form className="bg-white mx-auto pb-5 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-10 justify-between md:justify-start">
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                City
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" placeholder="City" required>
                  {carList.map((car) => (
                    <option name="carID" id="carID" key={car.id} value={car.id}>{car.model}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="date">
                Date
                <input type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" rows="5" cols="50" id="date" required />
              </label>
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                City
                <select name="city" id="city" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" placeholder="City" required>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="San Salvador">San Salvador</option>
                  <option value="Mexico City">Mexico City</option>
                </select>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="border font-bold py-2 px-4 rounded" type="submit">
              Save Car
            </button>
          </div>
        </form>
      </div>
    );
  }
  return (
    <Navigate to="/login" />
  );
}
