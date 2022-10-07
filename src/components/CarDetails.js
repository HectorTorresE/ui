import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TbSteeringWheel } from 'react-icons/tb';

const CarDetails = () => {
  const carDetails = useSelector((state) => state.car_details);
  const carDetailsLocal = localStorage.getItem('carDetails');
  const carDetailsParsed = JSON.parse(carDetailsLocal);

  if (carDetails.length > 0) {
    return (
      <div className="reservation-list">
        <div className="flex flex-col items-center p-8 m-4 max-w-3xl min-w-max bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center md:flex md:flex-row md:items-start">
            <div className="">
              <h1 className="text-3xl font-bold">
                {carDetailsParsed.brand}
                {' '}
                {carDetailsParsed.model}
              </h1>
              <img className="max-w-md" src={carDetailsParsed.image} alt={carDetailsParsed.model} />
              <Link className="link-to-cars py-3" to="/cars">
                DISCOVER MORE MODELS
              </Link>
            </div>
            <div>
              <table className="flex flex-col border-none items-center table-auto text-xl m-2 pl-4">
                <tbody className="border-none">
                  <tr>
                    <th className="p-2">Finance fee</th>
                    <td>
                      $
                      {carDetailsParsed.finance_fee}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">Option to purchase fee</th>
                    <td>
                      $
                      {carDetailsParsed.purchase_fee}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">Total ammount payable</th>
                    <td>
                      $
                      {carDetailsParsed.tap}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">Duration</th>
                    <td>
                      {carDetailsParsed.duration}
                      {' months'}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">5.9% APR Representative</th>
                  </tr>
                </tbody>
                <Link className="flex items-center link-to-reserve" to="/testdrive">
                  <button
                    type="submit"
                    className=" flex items-center config-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mb-3"
                  >
                    BOOK A TEST-DRIVE
                    <TbSteeringWheel size={35} />
                  </button>
                </Link>
              </table>
            </div>
          </div>
        </div>
      </div>

    );
  }
  return (
    <div className="reservation-list">
      <div className="flex flex-col items-center p-8 m-4 max-w-3xl min-w-max bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center md:flex md:flex-row md:items-start">
          <div className="">
            <h1 className="text-3xl font-bold">
              {carDetailsParsed.brand}
              {' '}
              {carDetailsParsed.model}
            </h1>
            <img className="w-5 h-5" src={carDetailsParsed.image} alt={carDetailsParsed.model} />
            <Link className="link-to-cars py-3" to="/cars">
              DISCOVER MORE MODELS
            </Link>
          </div>
          <div>
            <table className="flex flex-col border-none items-center table-auto text-xl m-2 pl-4">
              <tbody className="border-none">
                <tr>
                  <th className="p-2">Finance fee</th>
                  <td>
                    $
                    {carDetailsParsed.finance_fee}
                  </td>
                </tr>
                <tr>
                  <th className="p-2">Option to purchase fee</th>
                  <td>
                    $
                    {carDetailsParsed.purchase_fee}
                  </td>
                </tr>
                <tr>
                  <th className="p-2">Total ammount payable</th>
                  <td>
                    $
                    {carDetailsParsed.tap}
                  </td>
                </tr>
                <tr>
                  <th className="p-2">Duration</th>
                  <td>
                    {carDetailsParsed.duration}
                    {' months'}
                  </td>
                </tr>
                <tr>
                  <th className="p-2">5.9% APR Representative</th>
                </tr>
              </tbody>
              <Link className="flex items-center link-to-reserve" to="/testdrive">
                <button
                  type="submit"
                  className=" flex items-center config-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mb-3"
                >
                  BOOK A TEST-DRIVE
                  <TbSteeringWheel size={35} />
                </button>
              </Link>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CarDetails;
