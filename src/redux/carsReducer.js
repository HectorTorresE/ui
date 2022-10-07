import axios from 'axios';

// action type
const FETCH_CARS = 'carsReducer/FETCH_CARS';
const FETCH_CAR_DETAILS = 'carsReducer/FETCH_CAR_DETAILS';
const ADD_CAR = 'carsReducer/ADD_CAR';
const API_URL = 'https://bytecar.herokuapp.com/';
const DEL_CAR = 'carsReducer/DEL_CAR';

// initial state
const initialState = [];

// action creator
export const addCar = (data) => async (dispatch) => {
  const response = await axios.post(`${API_URL}/api/v1/cars`, data)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: ADD_CAR,
    payload: response,
  });
};

export const getCars = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}/api/v1/cars`)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: FETCH_CARS,
    payload: response,
  });
};

export const delCar = (id) => async (dispatch) => {
  const response = await axios.delete(`${API_URL}/api/v1/cars/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: DEL_CAR,
    payload: response,
  });
};

export function fetchCarsSuccess(data) {
  return {
    type: FETCH_CARS,
    payload: data,
  };
}

export function fetchCarDetailsSuccess(data) {
  return {
    type: FETCH_CAR_DETAILS,
    payload: data,
  };
}

// reducer
export function carsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    default:
      return state;
  }
}

// reducer
export function carDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAR_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
