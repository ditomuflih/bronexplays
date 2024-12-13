import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TambahPerangkatPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    status: "Tersedia",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.type) {
      setErrorMessage("Harap lengkapi data perangkat.");
      return;
    }

    const confirmation = window.confirm("Apakah Anda yakin ingin menambah perangkat?");
    if (confirmation) {
      // Simulasi penyimpanan perangkat baru (dapat diganti dengan API call)
      alert("Perangkat berhasil ditambahkan.");
      navigate("/kelola-perangkat");
    }
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
            onClick={() => navigate("/admin")}
          />
          <h1 className="text-white font-bold text-lg">BRONEXPLAYS</h1>
          <button className="bg-white text-black px-6 py-2 rounded border-2 border-white font-bold cursor-default hover:scale-105 transition-transform duration-300">
            TAMBAH PERANGKAT
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => navigate("/real-time")}
          >
            Pantau Real-Time
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => navigate("/pencatatan-penyewaan")}
          >
            Pencatatan Penyewaan
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => navigate("/lihat-laporan")}
          >
            Lihat Laporan
          </button>
        </div>
        <div
          className="bg-white p-2 rounded-full cursor-pointer"
          onClick={() => navigate("/profil-admin")}
        >
          <img src="/profile.png" alt="Profile" className="h-10 w-10" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-10">
        <h2 className="text-center text-2xl font-bold mb-6">Tambah Perangkat</h2>
        <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <div className="mb-4">
            <label className="block font-bold mb-2">Nama Perangkat</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Jenis Perangkat</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded focus:outline-none"
            />
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-transform hover:scale-105"
              onClick={() => navigate("/kelola-perangkat")}
            >
              Batal
            </button>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-transform hover:scale-105"
              onClick={handleSubmit}
            >
              Tambah Perangkat
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center space-x-2 py-10">
        <img src="/filkomlogo.png" alt="FILKOM Logo" className="h-12" />
        <img src="/ublogo.png" alt="UB Logo" className="h-12" />
        <img src="/image.png" alt="Logo" className="h-12" />
      </footer>
    </div>
  );
};

export default TambahPerangkatPage;
