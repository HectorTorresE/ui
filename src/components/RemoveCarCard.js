import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delCar } from '../redux/carsReducer';

function RemoveCarCard({ car }) {
  const dispatch = useDispatch();

  const removeConfirmation = () => {
    const card = document.getElementById(`car-${car.id}`);
    card.classList.add('hover:border-red-500');
    card.childNodes[0].childNodes[0].classList.add('grayscale');
    const description = document.getElementById(`description-${car.id}`);
    description.classList.add('hidden');
    const data = document.getElementById(`data-${car.id}`);
    data.classList.add('hidden');
    const msg = document.getElementById(`msg-${car.id}`);
    msg.classList.remove('hidden');
    const button = card.childNodes[1].childNodes[0];
    const yesButton = card.childNodes[1].childNodes[1];
    const noButton = card.childNodes[1].childNodes[2];
    button.classList.add('hidden');
    yesButton.classList.remove('hidden');
    noButton.classList.remove('hidden');

    yesButton.addEventListener('click', () => {
      dispatch(delCar(car.id));
      card.remove();
    });

    noButton.addEventListener('click', () => {
      card.classList.remove('text-custom-grey-500', 'hover:border-red-500');
      card.childNodes[0].childNodes[0].classList.remove('grayscale');
      noButton.classList.add('hidden');
      yesButton.classList.add('hidden');
      button.classList.remove('hidden');
      description.classList.remove('hidden');
      data.classList.remove('hidden');
      data.classList.remove('hidden');
      msg.classList.add('hidden');
    });
  };

  return (
    <div
      id={`car-${car.id}`}
      className="flex flex-col md:flex-row justify-between items-center mt-8 py-4 px-5 shadow-lg w-3/4 border-2 border-transparent hover:border-blue-900 rounded-md hover:shadow-2xl transition hover:scale-110 duration:300ms"
    >
      <div className="lg:flex w-full grow justify-between items-center">
        <div className="h-20">
          <img className="object-cover lg:h-20 m-auto rounded-md" src={car.image} alt={car.model} />
        </div>
        <div className="w-fit text-xs pt-2 lg:w-4/5 h-28 text-center flex flex-wrap flex-col justify-around overflow-hidden mx-5">
          <div className="hidden lg:flex-row justify-between" id={`msg-${car.id}`}>
            <h3 className="font-bold">Are you sure you want to remove this cars?</h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-between " id={`data-${car.id}`}>
            <h3 className="font-bold">
              Brand:&nbsp;
              {car.brand}
            </h3>
            <h3 className="font-bold">
              Model:&nbsp;
              {car.model}
            </h3>
            <h3 className="font-bold">
              ID:&nbsp;
              {car.id}
            </h3>
          </div>
          <h3 className="font-bold justify-items-start" id={`description-${car.id}`}>
            Description:&nbsp;
            {car.description}
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center md:mr-4">
        <button className="bg-custom-white-500 text-custom-grey-500 border border-custom-green-500 hover:bg-red-500 hover:text-white hover:border-red-500 font-bold py-2 px-4 rounded focus:outline-none" type="button" onClick={removeConfirmation}>
          Delete
        </button>
        <button className="bg-white-500 text-grey-500 border border-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 font-bold py-2 px-4 rounded focus:outline-none ml-2 hidden" type="button">
          Yes
        </button>
        <button className="bg-white-500 border border-green-500 hover:bg-green-500 hover:text-white hover:border-green-500 font-bold py-2 px-4 rounded focus:outline-none ml-2 hidden" type="button">
          No
        </button>
      </div>
    </div>
  );
}

RemoveCarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    model: PropTypes.string,
    description: PropTypes.string,
    finance_fee: PropTypes.number,
    purchase_fee: PropTypes.number,
    tap: PropTypes.number,
    duration: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default RemoveCarCard;
