import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCar } from '../redux/carsReducer';

export default function AddCar() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const brand = event.target.querySelector('#brand').value;
    const finance = event.target.querySelector('#finance_fee').value;
    const image = event.target.querySelector('#car-image').value;
    const model = event.target.querySelector('#model').value;
    const purchase = event.target.querySelector('#purchase_fee').value;
    const tap = event.target.querySelector('#tap').value;
    const duration = event.target.querySelector('#duration').value;
    const description = event.target.querySelector('#description').value;

    const data = new FormData();
    data.append('image', image);
    data.append('brand', brand);
    data.append('finance_fee', finance);
    data.append('model', model);
    data.append('purchase_fee', purchase);
    data.append('tap', tap);
    data.append('duration', duration);
    data.append('description', description);

    dispatch(addCar(data))
      .then(() => {
        <Navigate to="/cars" />;
      });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="py-10">
        <h1 className="text-5xl">Add Car</h1>
      </div>
      <div className="py-8">
        <form className="bg-white mx-auto px-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md: gap-2">
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-base" htmlFor="brand">
                Brand
                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus: outline-main focus:placeholder:text-grey" id="brand" type="text" placeholder="Car brand" required />
              </label>
            </div>
            <div>
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="finance_fee">
                Finance fee
                <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight  focus: outline-main focus:placeholder:text-grey" id="finance_fee" type="number" placeholder="Finance fee" required />
              </label>
            </div>
            <div>
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="car-image">
                Car Image
                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus: outline-main focus:placeholder:text-grey" id="car-image" type="text" placeholder="Upload Car Image" required />
              </label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md: gap-2 mt-2">
            <div>
              <label className="block text-gray-700 text-base font-bold mb-4" htmlFor="model">
                Car model
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus: outline-main focus:placeholder:text-grey" id="model" type="text" placeholder="Car model" required />
              </label>
            </div>
            <div>
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="purchase_fee">
                Purchase fee
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="purchase_fee" type="number" placeholder="Purchase fee" required />
              </label>
            </div>
            <div>
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="tap">
                Tap
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="tap" type="number" placeholder="Tap" required />
              </label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md: gap-2">
            <div>
              <label className="block text-gray-700 text-base font-bold mb-4" htmlFor="description">
                Description
                <textarea type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" rows="5" cols="50" id="description" placeholder="Description (Max 100 characters)" maxLength="100" required />
              </label>
            </div>
            <div>
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="duration">
                Duration
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="duration" type="number" placeholder="Duration" required />
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
    </div>
  );
}
