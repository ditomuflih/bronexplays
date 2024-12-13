import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PerbaruiPerangkatPage = ({ devices, setDevices }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const deviceToEdit = location.state?.device;

  const [formData, setFormData] = useState({
    name: deviceToEdit?.name || "",
    type: deviceToEdit?.type || "",
    status: deviceToEdit?.status || "Tersedia",
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

    const confirmation = window.confirm("Apakah Anda yakin ingin memperbarui perangkat?");
    if (confirmation) {
      try {
        setDevices((prevDevices) =>
          prevDevices.map((device) =>
            device.id === deviceToEdit.id
              ? { ...device, name: formData.name, type: formData.type, status: formData.status }
              : device
          )
        );
        alert("Perangkat berhasil diperbarui.");
        navigate("/kelola-perangkat");
      } catch (error) {
        alert("Gagal menyimpan perubahan, periksa koneksi internet Anda dan coba lagi.");
      }
    }
  };

  if (!deviceToEdit) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-bold text-lg">Tidak ada perangkat yang dipilih untuk diperbarui.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
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
            PERBARUI PERANGKAT
          </button>
        </div>
      </header>

      <main className="p-10">
        <h2 className="text-center text-2xl font-bold mb-6">Perbarui Perangkat</h2>
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
          <div className="mb-4">
            <label className="block font-bold mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded focus:outline-none"
            >
              <option value="Tersedia">Tersedia</option>
              <option value="Tidak Tersedia">Tidak Tersedia</option>
            </select>
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
              Perbarui Perangkat
            </button>
          </div>
        </div>
      </main>

      <footer className="flex justify-center space-x-2 py-10">
        <img src="/filkomlogo.png" alt="FILKOM Logo" className="h-12" />
        <img src="/ublogo.png" alt="UB Logo" className="h-12" />
        <img src="/image.png" alt="Logo" className="h-12" />
      </footer>
    </div>
  );
};

export default PerbaruiPerangkatPage;
