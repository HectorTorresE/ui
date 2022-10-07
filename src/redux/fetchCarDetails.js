const FETCH_DETAILS = 'fetchCarDetails/FETCH_DETAILS';
const initialState = [];

export const fetchCarDetails = (id) => async (dispatch) => {
  const connect = await fetch(`https://bytecar.herokuapp.com/api/v1/cars/${id}`);
  const res = await connect.json().then((data) => data);
  localStorage.setItem('carDetails', JSON.stringify(res));
  dispatch({
    type: FETCH_DETAILS,
    payload: res,
  });
};

export function reducerDetails(state = initialState, action) {
  switch (action.type) {
    case FETCH_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
