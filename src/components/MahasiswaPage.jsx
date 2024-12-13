import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const MahasiswaPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleCekKetersediaanClick = () => {
    navigate("/console"); // Redirect to console page
  };

  const handleReservasiClick = () => {
    navigate("/reservasi"); // Redirect to reservasi page
  };

  const handleNotifikasiClick = () => {
    navigate("/notifikasi"); // Redirect to jaminan page
  };

  const handleRiwayatClick = () => {
    navigate("/riwayat"); // Redirect to riwayat page
  };

  const handleProfilClick = () => {
    navigate("/profil"); // Redirect to profil page
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 flex items-center justify-between px-4 py-2">
        {/* Kiri: Logo dan Dashboard */}
        <div
          className="flex items-center space-x-4 animate-fade-in-down"
          style={{ animationDuration: "0.8s" }}
        >
          <img
            src="/image.png"
            alt="Logo BRONEXPLAYS"
            className="h-16 transform hover:scale-110 transition-transform duration-500"
          />
          <h1 className="text-white font-bold text-lg">BRONEXPLAYS</h1>
          <button className="bg-white text-black px-6 py-2 rounded border-2 border-white font-bold cursor-default hover:scale-105 transition-transform duration-300">
            DASHBOARD
          </button>
        </div>

        {/* Tengah: Reservasi, Notifikasi, Riwayat */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={handleReservasiClick} // Add onClick handler
          >
            RESERVASI
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={handleNotifikasiClick} // Add onClick handler
          >
            NOTIFIKASI
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={handleRiwayatClick} // Add onClick handler
          >
            RIWAYAT
          </button>
        </div>

        {/* Kanan: Profil */}
        <div
          className="bg-white p-2 rounded-full transform hover:scale-110 transition-transform duration-500"
          onClick={handleProfilClick} // Add onClick handler
        >
          <img src="/profile.png" alt="Profile" className="h-10 w-10 cursor-pointer" />
        </div>
      </header>

      {/* Main Content */}
      <main
        className="flex items-center justify-between p-20"
        style={{ animation: "fade-in 1s ease-in-out" }}
      >
        {/* Main Logo */}
        <div>
          <img
            src="/image.png"
            alt="Main Logo"
            className="h-[27rem] transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Paragraf Informasi */}
        <div
          className="flex flex-col items-center space-y-4 animate-fade-in-up"
          style={{ animationDuration: "1s" }}
        >
          <div className="bg-gray-200 px-10 py-10 rounded-md shadow-md max-w-sm">
            <p className="text-justify">
              BronexPlays adalah platform penyewaan console di Universitas
              Brawijaya yang memudahkan mahasiswa untuk melihat ketersediaan,
              melakukan reservasi, dan memantau status penyewaan console secara
              praktis.
            </p>
          </div>
          <button
            className="bg-yellow-400 text-black font-bold px-6 py-5 mt-4 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={handleCekKetersediaanClick} // Add onClick handler
          >
            Cek Ketersediaan Console
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center space-x-2 py-1">
        <img
          src="/filkomlogo.png"
          alt="FILKOM Logo"
          className="h-12 transform hover:scale-110 transition-transform duration-500"
        />
        <img
          src="/ublogo.png"
          alt="UB Logo"
          className="h-12 transform hover:scale-110 transition-transform duration-500"
        />
      </footer>
    </div>
  );
};

export default MahasiswaPage;
