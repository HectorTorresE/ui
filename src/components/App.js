import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './Login';
import SignUp from './Signup';
import Logout from './Logout';
import Cars from './Cars';
import CarDetails from './CarDetails';
import ReservationList from './ReservationList';
import AddCar from './AddCar';
import Home from './Home';
import RemoveCar from './RemoveCar';
import AddReservation from './AddReservation';
import store from '../redux/configureStore';
import '../App.css';
import Layout from '../layout';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car_details" element={<CarDetails />} />
          <Route path="/add_car" element={<AddCar />} />
          <Route path="/reservations" element={<ReservationList />} />
          <Route path="/remove_car" element={<RemoveCar />} />
          <Route path="/testdrive" element={<AddReservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
