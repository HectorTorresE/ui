import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationsSuccess } from '../redux/reservationsReducer';
import ReservationCard from './ReservationCard';
import '../Reservations.css';
import { request } from '../redux/users/api';

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservationList = useSelector((state) => state.reservations);
  const reservations = [];
  const user = JSON.parse(localStorage.getItem('user'));

  async function fetchData() {
    await request.get('https://bytecar.herokuapp.com/api/v1/reservations').then((res) => {
      dispatch(fetchReservationsSuccess(res.data));
    });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  reservationList.forEach((res) => reservations.push(
    <ReservationCard
      key={res.id}
      id={res.id}
      date={res.date}
      city={res.city}
      user={user.user}
      car={res.car.model}
      brand={res.car.brand}
    />,
  ));

  return (
    <div className="reservation-list">
      <h1 className="text-3xl font-bold mb-4 antialised">Reservations</h1>
      <h4 className="text-2xl antialised">{reservationList.length > 0 ? 'Please review your reservations' : 'First create a reservation!'}</h4>
      <div>{reservations}</div>
    </div>
  );
};

export default ReservationList;
