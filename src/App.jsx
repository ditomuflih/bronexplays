import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import MahasiswaPage from './components/MahasiswaPage';
import ConsolePage from './components/ConsolePage';
import ReservasiConsole from './components/ReservasiConsole'; // Import halaman Reservasi Console
import ReservasiPage from './components/ReservasiPage'; // Import halaman Reservasi
import DetailReservasi from './components/DetailReservasi'; // Import halaman Detail Reservasi
import RiwayatPage from './components/RiwayatPage'; // Import halaman Riwayat Penyewaan
import BeriUlasanPage from './components/BeriUlasanPage'; // Import halaman Beri Ulasan
import ProfilPage from './components/ProfilPage'; // Import halaman Profil
import NotifikasiPage from './components/NotifikasiPage';
import AdminPage from './components/AdminPage';
import AdminProfilPage from './components/AdminProfilPage'; // Import halaman Profil Admin
import RealTimePage from './components/RealTimePage'; // Import halaman Pantau Real-Time
import PencatatanPenyewaanPage from './components/PencatatanPenyewaanPage'; // Import halaman Pencatatan Penyewaan
import KelolaPerangkatPage from './components/KelolaPerangkatPage'; // Import halaman Kelola Perangkat
import TambahPerangkatPage from './components/TambahPerangkatPage'; // Import halaman Tambah Perangkat
import PerbaruiPerangkatPage from './components/PerbaruiPerangkatPage'; // Import halaman Perbarui Perangkat
import LihatLaporanHarianPage from './components/LihatLaporanHarianPage'; // Import halaman Lihat Laporan Harian

import './transitions.css'; 

const App = () => {
  const location = useLocation();

  // State untuk menyimpan semua data reservasi
  const [reservasiData, setReservasiData] = useState([]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={650} // Sesuaikan dengan durasi animasi di CSS
      >
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mahasiswa" element={<MahasiswaPage />} />
          
          {/* Pass setReservasiData ke ConsolePage */}
          <Route
            path="/console"
            element={<ConsolePage setReservasiData={setReservasiData} />}
          />

          {/* Pass setReservasiData ke ReservasiConsole */}
          <Route
            path="/reservasi-console"
            element={<ReservasiConsole setReservasiData={setReservasiData} />}
          />

          {/* Pass reservasiData ke ReservasiPage */}
          <Route
            path="/reservasi"
            element={<ReservasiPage reservasiData={reservasiData} />}
          />

          {/* Detail Reservasi */}
          <Route
            path="/reservasi/detail/:id"
            element={<DetailReservasi reservasiData={reservasiData} />}
          />

          {/* Riwayat Penyewaan */}
          <Route path="/riwayat" element={<RiwayatPage />} />

          {/* Beri Ulasan */}
          <Route path="/beri-ulasan" element={<BeriUlasanPage />} />

          {/* Profil */}
          <Route path="/profil" element={<ProfilPage />} />

          <Route path="/notifikasi" element={<NotifikasiPage />} />

          <Route path="/admin" element={<AdminPage />} />

          {/* Profil Admin */}
          <Route path="/profil-admin" element={<AdminProfilPage />} />

          {/* Pantau Real-Time */}
          <Route path="/real-time" element={<RealTimePage />} />

          {/* Pencatatan Penyewaan */}
          <Route path="/pencatatan-penyewaan" element={<PencatatanPenyewaanPage />} />

          {/* Kelola Perangkat */}
          <Route path="/kelola-perangkat" element={<KelolaPerangkatPage />} />

          {/* Tambah Perangkat */}
          <Route path="/tambah-perangkat" element={<TambahPerangkatPage />} />

          {/* Perbarui Perangkat */}
          <Route path="/perbarui-perangkat" element={<PerbaruiPerangkatPage />} />

          {/* Lihat Laporan Harian */}
          <Route path="/lihat-laporan" element={<LihatLaporanHarianPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
