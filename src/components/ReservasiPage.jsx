import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReservasiPage = () => {
  const navigate = useNavigate();

  // State untuk menyimpan data reservasi
  const [reservasiData, setReservasiData] = useState([]);

  // Fungsi untuk mendapatkan data dari localStorage atau sumber lainnya
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("reservasiData")) || [];
    setReservasiData(storedData);
  }, []);

  const handleViewDetails = (reservasi) => {
    navigate(`/reservasi/detail/${reservasi.id}`, { state: reservasi });
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <img
            src="/image.png"
            alt="Logo BRONEXPLAYS"
            className="h-16 transform hover:scale-110 transition-transform duration-300"
            onClick={() => navigate("/mahasiswa")}
          />
          <h1 className="text-white font-bold text-lg">BRONEXPLAYS</h1>
          <button className="bg-white text-black px-6 py-2 rounded border-2 border-white font-bold cursor-default hover:scale-105 transition-transform duration-300">
            RESERVASI
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => navigate("/console")}
          >
            CEK CONSOLE
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => navigate("/notifikasi")}
          >
            NOTIFIKASI
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => navigate("/riwayat")}
          >
            RIWAYAT
          </button>
        </div>
        <div
          className="bg-white p-2 rounded-full transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          onClick={() => navigate("/profil")}
        >
          <img src="/profile.png" alt="Profile" className="h-10 w-10" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-10">
        <h2 className="text-center text-2xl font-bold mb-6">Daftar Reservasi</h2>
        {reservasiData.length === 0 ? (
          <p className="text-center text-gray-600 font-semibold">
            Silakan lakukan reservasi terlebih dahulu.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {reservasiData.map((reservasi, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded p-4 flex items-center space-x-4"
              >
                <img
                  src={reservasi.logo}
                  alt={reservasi.consoleName}
                  className="h-20"
                />
                <div>
                  <p className="font-bold">{reservasi.consoleName}</p>
                  <p>Sesi: {reservasi.session}</p>
                  <p>Durasi: {reservasi.duration}</p>
                  <p>Tanggal: {reservasi.date || getCurrentDate()}</p>
                </div>
                <button
                  className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500"
                  onClick={() => handleViewDetails(reservasi)}
                >
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="flex justify-center space-x-2 py-10">
        <img
          src="/filkomlogo.png"
          alt="FILKOM Logo"
          className="h-12 transform hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/ublogo.png"
          alt="UB Logo"
          className="h-12 transform hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/image.png"
          alt="Logo BRONEXPLAYS"
          className="h-12 transform hover:scale-110 transition-transform duration-300"
        />
      </footer>
    </div>
  );
};

export default ReservasiPage;
