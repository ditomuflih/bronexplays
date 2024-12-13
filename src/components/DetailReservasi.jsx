import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailReservasi = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { consoleName, date, session, guarantee, id } = location.state || {}; // Tambahkan ID untuk identifikasi reservasi

  const [showGuaranteePopup, setShowGuaranteePopup] = useState(false); // Untuk popup jaminan
  const [cancelPopup, setCancelPopup] = useState(false); // Untuk popup pembatalan
  const [completePopup, setCompletePopup] = useState(false); // Untuk popup penyelesaian reservasi

  const handleCompleteReservation = () => {
    // Simpan ke riwayat dan hapus dari reservasi
    const reservasiData =
      JSON.parse(localStorage.getItem("reservasiData")) || [];
    const riwayatData = JSON.parse(localStorage.getItem("riwayatData")) || [];

    const completedReservation = reservasiData.find((item) => item.id === id);
    const updatedReservasiData = reservasiData.filter((item) => item.id !== id);

    if (completedReservation) {
      // Tambahkan ke riwayat
      localStorage.setItem(
        "riwayatData",
        JSON.stringify([...riwayatData, completedReservation])
      );
    }

    // Perbarui localStorage reservasi
    localStorage.setItem("reservasiData", JSON.stringify(updatedReservasiData));

    // Tampilkan popup
    setCompletePopup(true);
  };

  const handleCancelReservation = () => {
    // Hapus data dari localStorage
    const existingData = JSON.parse(localStorage.getItem("reservasiData")) || [];
    const updatedData = existingData.filter((item) => item.id !== id); // Hapus reservasi berdasarkan ID
    localStorage.setItem("reservasiData", JSON.stringify(updatedData));

    // Arahkan kembali ke halaman daftar reservasi
    navigate("/reservasi");
  };

  const handleViewGuarantee = () => {
    if (guarantee) {
      setShowGuaranteePopup(true); // Tampilkan popup gambar jaminan
    } else {
      alert("Tidak ada jaminan yang tersedia untuk reservasi ini.");
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
            onClick={() => navigate("/mahasiswa")}
          />
          <h1 className="text-white font-bold text-lg">BRONEXPLAYS</h1>
          <button className="bg-white text-black px-6 py-2 rounded border-2 border-white font-bold cursor-default hover:scale-105 transition-transform duration-300">
            DETAIL RESERVASI
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
        <h2 className="text-center text-2xl font-bold mb-6">Detail Reservasi</h2>
        <div className="bg-white shadow-md rounded p-6">
          <p className="font-bold">Console: {consoleName}</p>
          <p>Tanggal: {date}</p>
          <p>Sesi: {session}</p>
          <p>Jaminan: {guarantee ? guarantee : "Tidak tersedia"}</p>
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={handleCompleteReservation}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-transform hover:scale-105"
          >
            Selesaikan Reservasi
          </button>
          <button
            onClick={() => setCancelPopup(true)}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-transform hover:scale-105"
          >
            Batalkan Reservasi
          </button>
          <button
            onClick={handleViewGuarantee}
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
          >
            Lihat Jaminan
          </button>
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

      {/* Popup Lihat Jaminan */}
      {showGuaranteePopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4">Jaminan</h3>
            <img
              src={`/uploads/${guarantee}`} // Pastikan path sesuai dengan lokasi penyimpanan gambar
              alt="Jaminan"
              className="max-w-full h-auto rounded shadow-md"
            />
            <p className="text-green-500 font-bold mt-2">Status: Jaminan Aktif</p>
            <button
              className="bg-red-500 text-white px-6 py-2 rounded mt-4 hover:bg-red-600 transition-transform hover:scale-105"
              onClick={() => setShowGuaranteePopup(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Popup Selesaikan Reservasi */}
      {completePopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4">Reservasi Selesai</h3>
            <p>Reservasi Anda telah berhasil diselesaikan!</p>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-600 transition-transform hover:scale-105"
              onClick={() => {
                setCompletePopup(false);
                navigate("/riwayat");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Popup Batalkan Reservasi */}
      {cancelPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4">Konfirmasi Pembatalan</h3>
            <p>Apakah Anda yakin ingin membatalkan reservasi ini?</p>
            <div className="flex justify-around mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleCancelReservation}
              >
                Iya
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setCancelPopup(false)}
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailReservasi;
