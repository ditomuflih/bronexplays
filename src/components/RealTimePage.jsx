import React from "react";
import { useNavigate } from "react-router-dom";

const RealTimePage = () => {
  const navigate = useNavigate();

  // Data console untuk pemantauan real-time
  const consoles = [
    { id: 1, name: "PS5 (Meja 1)", logo: "/pslogo.png", status: "Aktif", duration: "30 Menit", date: "14 Mei 2025" },
    { id: 2, name: "PS5 (Meja 2)", logo: "/pslogo.png", status: "Aktif", duration: "45 Menit", date: "14 Mei 2025" },
    { id: 3, name: "Xbox (Meja 3)", logo: "/xboxlogo.png", status: "Aktif", duration: "15 Menit", date: "14 Mei 2025" },
    { id: 4, name: "Xbox (Meja 4)", logo: "/xboxlogo.png", status: "Aktif", duration: "20 Menit", date: "14 Mei 2025" },
    { id: 5, name: "PC (Meja 5)", logo: "/pclogo.png", status: "Aktif", duration: "38 Menit", date: "14 Mei 2025" },
    { id: 6, name: "Dance MAT", logo: "/dancelogo.png", status: "Tidak Aktif", duration: "-", date: "14 Mei 2025" },
  ];

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
            STATUS REAL-TIME
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => navigate("/pencatatan-penyewaan")}
          >
            Pencatatan Penyewaan
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => navigate("/kelola-perangkat")}
          >
            Kelola Perangkat
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
        <h2 className="text-center text-2xl font-bold mb-6">Status Real-Time</h2>
        <div className="grid grid-cols-3 gap-6">
          {consoles.map((console) => (
            <div
              key={console.id}
              className="bg-blue-100 p-4 rounded shadow-md relative transform hover:scale-105 transition-transform duration-300"
            >
              <img src={console.logo} alt={console.name} className="h-20 mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-center">{console.name}</h3>
              <p>Status: <span className="font-semibold">{console.status}</span></p>
              <p>Sisa Durasi: <span className="font-semibold">{console.duration}</span></p>
              <p>Tanggal: <span className="font-semibold">{console.date}</span></p>
              <div
                className={`absolute top-2 right-2 h-4 w-4 rounded-full ${
                  console.status === "Aktif" ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            </div>
          ))}
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

export default RealTimePage;
