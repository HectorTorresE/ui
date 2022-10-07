import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () => {
  if (JSON.parse(localStorage.getItem('user'))) {
    return (
      <div>

        <div className="home-container h-32 w-32 ...">
          <h1>BE PART OF THE ELECTRIC REVOLUTION</h1>
          <div className="flex m-2 absolute right-0 bottom-0 ...">
            <Link to="/logout" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-full  px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">logout</Link>
          </div>
        </div>

        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <p className="mr-4">Devs:</p>
            </li>
            <li>
              <p className="mr-4">&#123;</p>
            </li>
            <li>
              <a href="https://github.com/fabianofrank" className="mr-4 hover:underline md:mr-6">Frank</a>
            </li>
            <li>
              <a href="https://github.com/fabianofrank" className="mr-4 hover:underline md:mr-6">Hector</a>
            </li>
            <li>
              <a href="https://github.com/fabianofrank" className="mr-4 hover:underline md:mr-6">Jose</a>
            </li>
            <li>
              <p className="mr-4">&#125;</p>
            </li>
          </ul>
        </footer>

      </div>
    );
  }

  return (
    <div className="">

      <div className="home-container relative h-32 w-32 ...">
        <h1>BE PART OF THE ELECTRIC REVOLUTION</h1>
        <div className="flex m-2 space-x-1 absolute right-0 bottom-0 ...">
          <Link to="/login" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-full  px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">login</Link>
          <Link to="/signup" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-full  px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">signup</Link>
        </div>
      </div>

      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <p className="mr-4">Devs:</p>
          </li>
          <li>
            <p className="mr-4">&#123;</p>
          </li>
          <li>
            <a href="https://github.com/fabianofrank" className="mr-4 hover:underline md:mr-6">Frank</a>
          </li>
          <li>
            <a href="https://github.com/HectorTorresE" className="mr-4 hover:underline md:mr-6">Hector</a>
          </li>
          <li>
            <a href="https://github.com/jr-cast" className="mr-4 hover:underline md:mr-6">Jose</a>
          </li>
          <li>
            <p className="mr-4">&#125;</p>
          </li>
        </ul>
      </footer>

    </div>
  );
};

export default Home;
