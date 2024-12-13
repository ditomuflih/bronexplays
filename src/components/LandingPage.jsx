import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Mengarahkan ke halaman login
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Header */}
      <header className="bg-blue-600 flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="/image.png"
            alt="Logo BRONEXPLAYS"
            className="h-20 transition-transform duration-500 hover:scale-105"
          />
          <h1 className="text-white ml-2 font-bold text-lg">BRONEXPLAYS</h1>
        </div>
        <button
          onClick={handleLoginClick}
          className="bg-yellow-400 text-black font-bold px-14 py-5 rounded hover:bg-yellow-500 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          LOGIN
        </button>
      </header>

      {/* Logo FILKOM */}
      <div className="absolute top-28 right-1 flex flex-col items-center space-y-4 transition-transform duration-500 hover:scale-110">
        <img src="/filkomlogo.png" alt="Logo FILKOM" className="h-20" />
      </div>

      {/* Main Content */}
      <main
        className="flex items-center justify-center bg-cover bg-center relative h-[calc(93vh-4rem)] transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: "url('/bgimage.png')",
        }}
      >
        <div className="text-center">
          <img
            src="/image.png"
            alt="Main Logo"
            className="w-65 mx-auto mb-8 transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Logo UB */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center space-y-4 transition-transform duration-500 hover:scale-110">
          <img src="/ublogo.png" alt="Logo Universitas Brawijaya" className="h-20" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
