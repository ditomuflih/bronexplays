import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BeriUlasanPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { consoleName } = location.state || {};

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successPopup, setSuccessPopup] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
    setErrorMessage("");
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = () => {
    if (!rating || !comment.trim()) {
      setErrorMessage(
        "Ulasan Anda belum lengkap. Harap lengkapi ulasan sebelum mengirim."
      );
      return;
    }

    // Simpan ulasan ke localStorage
    const ulasanData = JSON.parse(localStorage.getItem("ulasanData")) || [];
    const newUlasan = {
      id: Date.now(),
      consoleName,
      rating,
      comment,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    localStorage.setItem("ulasanData", JSON.stringify([...ulasanData, newUlasan]));

    // Tampilkan popup sukses
    setSuccessPopup(true);
  };

  if (!consoleName) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded p-6 text-center">
          <h3 className="text-lg font-bold mb-4">Tidak Dapat Memberikan Ulasan</h3>
          <p className="text-gray-600">
            Anda belum melakukan penyewaan. Harap lakukan penyewaan terlebih
            dahulu sebelum memberikan ulasan.
          </p>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition-transform hover:scale-105"
            onClick={() => navigate("/riwayat")}
          >
            Kembali ke Riwayat
          </button>
        </div>
      </div>
    );
  }

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
            BERI ULASAN
          </button>
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
        <h2 className="text-center text-2xl font-bold mb-6">Beri Ulasan</h2>
        <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
          <h3 className="font-bold mb-4">Console: {consoleName}</h3>
          <div className="mb-4">
            <label className="block font-bold mb-2">Rating:</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  className={`px-3 py-1 rounded-full text-white font-bold ${
                    rating >= value ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                  onClick={() => handleRatingChange(value)}
                >
                  {value} ★
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Komentar:</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Tulis pengalaman Anda..."
            ></textarea>
          </div>
          {errorMessage && (
            <p className="text-red-600 font-bold mb-4">{errorMessage}</p>
          )}
          <div className="flex justify-center">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-transform hover:scale-105"
              onClick={handleSubmit}
            >
              Kirim Ulasan
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

      {/* Popup Sukses */}
      {successPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4">Ulasan Berhasil Disimpan</h3>
            <p>Terima kasih telah menggunakan Game Corner.</p>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-600 transition-transform hover:scale-105"
              onClick={() => {
                setSuccessPopup(false);
                navigate("/riwayat");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeriUlasanPage;
