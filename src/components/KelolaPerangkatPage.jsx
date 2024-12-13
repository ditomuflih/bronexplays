import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const KelolaPerangkatPage = () => {
  const navigate = useNavigate();

  // Data perangkat untuk ditampilkan
  const [devices, setDevices] = useState([
    { id: 1, name: "PS 5 (Meja 1)", type: "PlayStation 5", status: "Tersedia", logo: "/pslogo.png" },
    { id: 2, name: "PS 5 (Meja 2)", type: "PlayStation 5", status: "Tersedia", logo: "/pslogo.png" },
    { id: 3, name: "Xbox (Meja 3)", type: "Xbox", status: "Tersedia", logo: "/xboxlogo.png" },
    { id: 4, name: "Xbox (Meja 4)", type: "Xbox", status: "Tersedia", logo: "/xboxlogo.png" },
    { id: 5, name: "PC (Meja 5)", type: "PC", status: "Tersedia", logo: "/pclogo.png" },
    { id: 6, name: "Dance MAT", type: "Dance MAT", status: "Tersedia", logo: "/dancelogo.png" },
  ]);

  // State untuk mengelola modal konfirmasi
  const [showModal, setShowModal] = useState(false);
  const [deviceToDelete, setDeviceToDelete] = useState(null);

  // Fungsi untuk membuka modal konfirmasi
  const handleDelete = (device) => {
    if (device.status === "Sedang Digunakan") {
      alert("Perangkat tidak dapat dihapus karena sedang digunakan oleh mahasiswa.");
      return;
    }
    setDeviceToDelete(device);
    setShowModal(true);
  };

  // Fungsi untuk menghapus perangkat
  const confirmDelete = () => {
    setDevices((prevDevices) => prevDevices.filter((d) => d.id !== deviceToDelete.id));
    setShowModal(false);
    setDeviceToDelete(null);
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
            KELOLA PERANGKAT
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
        <h2 className="text-center text-2xl font-bold mb-6">Kelola Perangkat</h2>
        <div className="flex justify-end mb-6">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-transform hover:scale-105"
            onClick={() => navigate("/tambah-perangkat")}
          >
            Tambah Perangkat
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {devices.map((device) => (
            <div
              key={device.id}
              className="bg-blue-100 p-4 rounded shadow-md relative transform hover:scale-105 transition-transform duration-300"
            >
              <img src={device.logo} alt={device.name} className="h-20 mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-center">{device.name}</h3>
              <p>Jenis: <span className="font-semibold">{device.type}</span></p>
              <p>Status: <span className="font-semibold">{device.status}</span></p>
              <div className="flex justify-around mt-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-transform hover:scale-105"
                  onClick={() => navigate("/perbarui-perangkat", { state: { device } })}
                >
                  Perbarui
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-transform hover:scale-105"
                  onClick={() => handleDelete(device)}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Konfirmasi */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">Konfirmasi Penghapusan</h3>
            <p>Apakah Anda yakin ingin menghapus perangkat <strong>{deviceToDelete?.name}</strong>?</p>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Tidak
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={confirmDelete}
              >
                Iya
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="flex justify-center space-x-2 py-10">
        <img src="/filkomlogo.png" alt="FILKOM Logo" className="h-12" />
        <img src="/ublogo.png" alt="UB Logo" className="h-12" />
        <img src="/image.png" alt="Logo" className="h-12" />
      </footer>
    </div>
  );
};

export default KelolaPerangkatPage;
