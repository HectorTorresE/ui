import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../redux/carsReducer';
import RemoveCarCard from './RemoveCarCard';

function RemoveCar() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className="flex flex-col items-center h-screen w-full overflow-y-scroll pt-20 text-center">
      <h1 className="text-4xl text-blue-900">Remove Car</h1>
      {
        cars.map((car) => <RemoveCarCard key={car.id} car={car} />)
      }
    </div>
  );
}

export default RemoveCar;
