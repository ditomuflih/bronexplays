import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilPage = () => {
  const navigate = useNavigate();

  // Data pengguna (dapat disesuaikan sesuai kebutuhan)
  const user = {
    nama: "Udin BIN Saharuddin",
    nim: "235150200111000",
    fakultas: "FAKULTAS ILMU KOMPUTER",
  };

  // Fungsi logout
  const handleLogout = () => {
    // Hapus sesi pengguna jika diperlukan (misal: localStorage/sessionStorage)
    localStorage.clear(); // Contoh: membersihkan localStorage
    sessionStorage.clear(); // Contoh: membersihkan sessionStorage

    // Arahkan ke halaman landing page
    navigate("/");
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
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => navigate("/reservasi")}
          >
            RESERVASI
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
        <h2 className="text-center text-2xl font-bold mb-6">Profil Pengguna</h2>
        <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
          <div className="mb-4">
            <p className="font-bold mb-2">Nama Lengkap:</p>
            <p className="text-gray-600">{user.nama}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold mb-2">NIM:</p>
            <p className="text-gray-600">{user.nim}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold mb-2">Fakultas:</p>
            <p className="text-gray-600">{user.fakultas}</p>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-transform hover:scale-105"
              onClick={() => navigate("/mahasiswa")}
            >
              Kembali ke Beranda
            </button>
            <button
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-transform hover:scale-105"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
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

export default ProfilPage;
