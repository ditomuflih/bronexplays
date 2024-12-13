import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ReservasiConsole = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { consoleName, consoleType, logo } = location.state || {};

  const [selectedSession, setSelectedSession] = useState("");
  const [uploadedGuarantee, setUploadedGuarantee] = useState(null);
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false); // Popup untuk konfirmasi sukses
  const [cancelPopup, setCancelPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Simulasi sesi tersedia (sesi 5 tidak tersedia)
  const availableSessions = [1, 2, 3, 4, 6, 7, 8]; // Sesi 5 tidak tersedia

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const allowedFormats = ["image/png", "image/jpeg", "application/pdf"];

    if (file && !allowedFormats.includes(file.type)) {
      setUploadedGuarantee(null);
      setErrorMessage(
        "Format file tidak sesuai, silakan unggah ulang dengan format yang benar."
      );
      return;
    }

    setUploadedGuarantee(file);
    setErrorMessage(""); // Clear error message
  };

  const handleSubmit = () => {
    if (!selectedSession || !uploadedGuarantee) {
      setErrorMessage(
        "Mohon lengkapi semua data yang diperlukan sebelum melanjutkan."
      );
      return;
    }

    // Tampilkan popup konfirmasi
    setConfirmationPopup(true);
  };

  const confirmReservation = () => {
    const newReservation = {
      id: Date.now(), // Unique ID
      consoleName,
      consoleType,
      session: selectedSession,
      duration: "1 Jam",
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      logo,
      guarantee: uploadedGuarantee ? uploadedGuarantee.name : null, // Simpan nama file jaminan
    };

    // Simpan data ke localStorage
    const existingData =
      JSON.parse(localStorage.getItem("reservasiData")) || [];
    localStorage.setItem(
      "reservasiData",
      JSON.stringify([...existingData, newReservation])
    );

    // Reset form and tampilkan popup sukses
    setConfirmationPopup(false);
    setSuccessPopup(true); // Tampilkan popup sukses
  };

  const handleCancel = () => {
    setCancelPopup(false); // Popup batal
    navigate("/console"); // Arahkan kembali ke halaman Console
  };

  const handleSuccessNavigation = () => {
    setSuccessPopup(false); // Tutup popup sukses
    navigate("/reservasi"); // Navigasi ke halaman reservasi
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">
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
            RESERVASI
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => setCancelPopup(true)}
          >
            RESERVASI
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => setCancelPopup(true)}
          >
            NOTIFIKASI
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
            onClick={() => setCancelPopup(true)}
          >
            RIWAYAT
          </button>
        </div>
        <div
          className="bg-white p-2 rounded-full transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          onClick={() => setCancelPopup(true)}
        >
          <img src="/profile.png" alt="Profile" className="h-10 w-10" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-10">
        <div className="flex items-center justify-between">
          {/* Informasi Mahasiswa di Kiri */}
          <div className="flex items-center space-x-8">
            <img
              src={logo || "/defaultlogo.png"}
              alt={consoleName}
              className="h-40"
            />
            <div className="space-y-2 bg-gray-200 p-6 rounded shadow-md">
              <div className="font-bold">Jenis Console: {consoleType}</div>
              <div>Nama: Udin</div>
              <div>Email: udin@student.ub.ac.id</div>
              <div>Fakultas: FAKULTAS ILMU KOMPUTER</div>
              <div>No Console: {consoleName}</div>
            </div>
          </div>

          {/* Form Reservasi */}
          <div className="bg-gray-200 p-6 rounded shadow-md max-w-md">
            <h3 className="font-bold text-lg mb-4">Detail Reservasi</h3>
            <div className="mb-4">
              <label className="block mb-2">Pilih Sesi:</label>
              <select
                className="w-full p-2 border rounded"
                value={selectedSession}
                onChange={(e) => setSelectedSession(e.target.value)}
              >
                <option value="">-- Pilih Sesi --</option>
                {Array.from({ length: 8 }, (_, i) => i + 1).map((session) =>
                  availableSessions.includes(session) ? (
                    <option key={session} value={session}>
                      Sesi {session}
                    </option>
                  ) : (
                    <option key={session} value={session} disabled>
                      Sesi {session} (Tidak Tersedia)
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Unggah Jaminan:</label>
              <input
                type="file"
                className="w-full p-2 border rounded"
                onChange={handleFileUpload}
              />
            </div>
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-transform hover:scale-105"
                onClick={() => setCancelPopup(true)}
              >
                Batal
              </button>
              <button
                className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-transform hover:scale-105"
                onClick={handleSubmit}
              >
                Kirim
              </button>
            </div>
          </div>
        </div>

        {errorMessage && (
          <p className="text-red-600 font-bold text-center mt-4">{errorMessage}</p>
        )}
      </main>

      {/* Popup Konfirmasi */}
      {confirmationPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96 text-center">
            <h3 className="text-lg font-bold mb-4">Konfirmasi Reservasi</h3>
            <p className="mb-6">Apakah data yang Anda masukkan sudah sesuai?</p>
            <div className="flex justify-around">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={confirmReservation}
              >
                Iya
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setConfirmationPopup(false)}
              >
                Belum
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Sukses */}
      {successPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96 text-center">
            <h3 className="text-lg font-bold mb-4">Reservasi Berhasil</h3>
            <p className="mb-6">
              Selamat! Reservasi Anda telah berhasil dibuat.
            </p>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              onClick={handleSuccessNavigation}
            >
              Lihat Reservasi
            </button>
          </div>
        </div>
      )}

      {/* Popup Batal */}
      {cancelPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96 text-center">
            <h3 className="text-lg font-bold mb-4">Batalkan Reservasi</h3>
            <p className="mb-6">Apakah Anda yakin ingin membatalkan reservasi ini?</p>
            <div className="flex justify-around">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleCancel}
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

export default ReservasiConsole;
