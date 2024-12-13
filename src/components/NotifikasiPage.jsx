import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotifikasiPage = () => {
  const navigate = useNavigate();
  const [reservasiData, setReservasiData] = useState([]);

  useEffect(() => {
    // Ambil data reservasi dari localStorage
    const data = JSON.parse(localStorage.getItem("reservasiData")) || [];
    setReservasiData(data);
  }, []);

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
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => navigate("/reservasi")}
          >
            RESERVASI
          </button>
          <button
            className="bg-white text-black px-6 py-2 rounded border-2 border-white font-bold cursor-default hover:scale-105 transition-transform duration-300"
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
        <h2 className="text-center text-2xl font-bold mb-6">Notifikasi</h2>
        <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
          {reservasiData.length === 0 ? (
            <p className="text-gray-600 text-center">
              Silakan lakukan reservasi terlebih dahulu.
            </p>
          ) : (
            <ul className="space-y-4">
              {reservasiData.map((reservasi) => (
                <li key={reservasi.id} className="border-b pb-4">
                  <p className="font-bold">Tanggal: {reservasi.date}</p>
                  <p>Durasi: {reservasi.duration}</p>
                  <p>Jenis Console: {reservasi.consoleName}</p>
                  <p>Sesi: {reservasi.session}</p>
                  <p className="text-gray-600">
                    Pengingat: Pastikan Anda mengembalikan console tepat waktu.
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
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

export default NotifikasiPage;
