import { request } from './users/api';

// action type
const FETCH_RESERVATIONS = 'reservationsReducer/FETCH_RESERVATIONS';
const CREATE_RESERVATION = 'reservationsReducer/CREATE_RESERVATION';

// initial state
const initialState = [];

// action creator
export function fetchReservationsSuccess(data) {
  return {
    type: FETCH_RESERVATIONS,
    payload: data,
  };
}

export const createReservation = (data, user) => async (dispatch) => {
  console.log(data);
  const response = await request.post(`https://bytecar.herokuapp.com/api/v1/users/${user}/reservations`, data)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: CREATE_RESERVATION,
    payload: response,
  });
};

// reducer
export function reservationsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
}
