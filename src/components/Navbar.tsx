import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-blue-500 p-4 mb-12">
    <ul className="flex space-x-4 items-center justify-center   ">
      <li><Link to="/" className="text-white">Home</Link></li>
      <li><Link to="/about" className="text-white">About</Link></li>
      <li><Link to="/natiq" className="text-white">Natiq</Link></li>
    </ul>
  </nav>
);

export default Navbar;
