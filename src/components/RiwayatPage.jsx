import React from "react";
import { useNavigate } from "react-router-dom";

const RiwayatPage = () => {
  const navigate = useNavigate();

  // Ambil data riwayat dari localStorage
  const riwayatData = JSON.parse(localStorage.getItem("riwayatData")) || [];

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
            RIWAYAT
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
            onClick={() => navigate("/reservasi")}
          >
            RESERVASI
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
        <h2 className="text-center text-2xl font-bold mb-6">Riwayat Penyewaan</h2>
        {riwayatData.length === 0 ? (
          <p className="text-center text-gray-600 font-semibold">
            Tidak ada penyewaan yang dapat ditampilkan. Silahkan lakukan reservasi terlebih dahulu.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {riwayatData.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded p-6 flex justify-between items-center relative"
              >
                {/* Informasi Reservasi */}
                <div>
                  <p className="font-bold">{item.consoleName}</p>
                  <p>Tanggal: {item.date}</p>
                  <p>Sesi: {item.session}</p>
                  <p>Durasi: {item.duration}</p>
                </div>

                {/* Status Reservasi */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-bold bg-green-500"
                >
                  Reservasi Selesai
                </div>

                {/* Tombol Beri Ulasan */}
                <button
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
                  onClick={() =>
                    navigate("/beri-ulasan", { state: { consoleName: item.consoleName } })
                  }
                >
                  Beri Ulasan
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

export default RiwayatPage;
