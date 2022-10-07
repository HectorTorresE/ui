import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Navbar from './components/Navbar';

const Layout = () => {
  const [Desktop, setNavbar] = useState(false);

  const showNavbar = () => setNavbar(!Desktop);

  return (
    <div className="flex flex-row w-full h-full">
      <div className="lg:w-64">
        <div className="absolute z-20">
          <FaIcons.FaBars className={Desktop ? 'hidden' : 'm-2 text-4xl bg-none text-blue-900 lg:hidden'} onClick={showNavbar} />
          <AiIcons.AiOutlineClose className={Desktop ? 'text-4xl self-start m-2 absolute text-white' : 'hidden'} onClick={showNavbar} />
        </div>
        <div className={Desktop ? 'z-10' : 'hidden z-0 lg:block'}>
          <Navbar />
        </div>
      </div>
      <div className=" lg:w-fit grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
