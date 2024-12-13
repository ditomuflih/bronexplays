import React from "react";
import { useNavigate } from "react-router-dom";

const PencatatanPenyewaanPage = () => {
  const navigate = useNavigate();

  // Data penyewaan untuk ditampilkan
  const rentals = [
    { id: 1, name: "PS 5 (Meja 1)", mahasiswa: "Udin", duration: "1 Jam", date: "14 Mei 2025", logo: "/pslogo.png" },
    { id: 2, name: "PS 5 (Meja 2)", mahasiswa: "Dana", duration: "1 Jam", date: "14 Mei 2025", logo: "/pslogo.png" },
    { id: 3, name: "Xbox (Meja 3)", mahasiswa: "Lina", duration: "1 Jam", date: "14 Mei 2025", logo: "/xboxlogo.png" },
    { id: 4, name: "Xbox (Meja 4)", mahasiswa: "Akbar", duration: "1 Jam", date: "14 Mei 2025", logo: "/xboxlogo.png" },
    { id: 5, name: "PC (Meja 5)", mahasiswa: "Kartika", duration: "1 Jam", date: "14 Mei 2025", logo: "/pclogo.png" },
    { id: 6, name: "Dance MAT", mahasiswa: "Arya", duration: "1 Jam", date: "14 Mei 2025", logo: "/dancelogo.png" },
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
            PENCATATAN PENYEWAAN
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
        <h2 className="text-center text-2xl font-bold mb-6">Pencatatan Penyewaan Otomatis</h2>
        <div className="grid grid-cols-3 gap-6">
          {rentals.map((rental) => (
            <div
              key={rental.id}
              className="bg-blue-100 p-4 rounded shadow-md relative transform hover:scale-105 transition-transform duration-300"
            >
              <img src={rental.logo} alt={rental.name} className="h-20 mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">{rental.name}</h3>
              <p>Mahasiswa: <span className="font-semibold">{rental.mahasiswa}</span></p>
              <p>Durasi: <span className="font-semibold">{rental.duration}</span></p>
              <p>Tanggal: <span className="font-semibold">{rental.date}</span></p>
              <button
                className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
                onClick={() => alert(`Detail untuk ${rental.name}`)}
              >
                Lihat Detail
              </button>
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

export default PencatatanPenyewaanPage;
