import React from 'react';

const HomePage: React.FC = () => (
  <div className="flex flex-col justify-center items-center p-4">
    <h1 className="text-2xl font-bold mb-4">Welcome to Natiq</h1>
    <p className="mb-4">This service allows you to convert Arabic text to speech.</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.location.href='/natiq'}>Go to Natiq</button>
  </div>
);

export default HomePage;
