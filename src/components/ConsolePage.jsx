import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConsolePage = ({ setReservasiData }) => {
  const [selectedDay, setSelectedDay] = useState("Senin"); // Default to Monday
  const [showFilter, setShowFilter] = useState(false); // Show/hide day filter
  const [errorMessage, setErrorMessage] = useState(""); // Error message
  const navigate = useNavigate();

  const consoles = [
    { id: 1, name: "PS5 (1)", logo: "/pslogo.png" },
    { id: 2, name: "PS5 (2)", logo: "/pslogo.png" },
    { id: 3, name: "XBOX (2)", logo: "/xboxlogo.png" },
    { id: 4, name: "XBOX (1)", logo: "/xboxlogo.png" },
    { id: 5, name: "PC", logo: "/pclogo.png" },
    { id: 6, name: "DANCE MAT", logo: "/dancelogo.png" },
  ];

  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

  const handleFilterClick = () => setShowFilter(!showFilter);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowFilter(false);
    setErrorMessage(""); // Clear error message
  };

  const handleLogoClick = () => {
    navigate("/mahasiswa"); // Navigate to landing page
  };

  const getConsolesForDay = (day) => {
    if (day === "Kamis") {
      // On Thursday, all consoles are unavailable
      return consoles.map((console) => ({ ...console, available: false }));
    }
    // For other days, random availability
    return consoles.map((console) => ({
      ...console,
      available: Math.random() > 0.5, // 50% chance of being available
    }));
  };

  const handleConsoleClick = (console) => {
    if (console.available) {
      // Tambahkan data reservasi ke state global
      setReservasiData((prevData) => [
        ...prevData,
        {
          consoleName: console.name,
          consoleType: console.name.split(" ")[0], // Extract console type (e.g., PS5, XBOX)
          duration: "1 Jam",
          logo: console.logo,
          day: selectedDay,
        },
      ]);

      // Navigate to console reservation page
      navigate("/reservasi-console", {
        state: {
          consoleName: console.name,
          consoleType: console.name.split(" ")[0], // Extract console type (e.g., PS5, XBOX)
          duration: "1 Jam",
          logo: console.logo, // Pass the logo for rendering
        },
      });
    } else {
      setErrorMessage("Console tidak tersedia. Silakan pilih console lain.");
    }
  };

  const filteredConsoles = getConsolesForDay(selectedDay);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4" onClick={handleLogoClick}>
          <img src="/image.png" alt="Logo BRONEXPLAYS" className="h-16" onClick={() => navigate("/mahasiswa")} />
          <h1 className="text-white font-bold text-lg">BRONEXPLAYS</h1>
          <button className="bg-white text-black px-6 py-2 rounded border-2 border-white font-bold cursor-default hover:scale-105 transition-transform duration-300">
            CONSOLE
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
            onClick={() => navigate("/reservasi")}
          >
            RESERVASI
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
            onClick={() => navigate("/notifikasi")}
          >
            NOTIFIKASI
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
            onClick={() => navigate("/riwayat")}
          >
            RIWAYAT
          </button>
        </div>
        <div
          className="bg-white p-2 rounded-full cursor-pointer"
          onClick={() => navigate("/profil")}
        >
          <img src="/profile.png" alt="Profile" className="h-10 w-10" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 bg-green-500 rounded-full"></div>
              <span>Tersedia</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 bg-red-500 rounded-full"></div>
              <span>Tidak tersedia</span>
            </div>
          </div>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
            onClick={handleFilterClick}
          >
            Filter Hari
          </button>
        </div>

        {showFilter && (
          <div className="grid grid-cols-5 gap-4 mb-6">
            {days.map((day, index) => (
              <div
                key={index}
                className={`bg-yellow-400 text-black font-bold p-4 rounded shadow-md text-center transform hover:scale-105 transition-transform duration-300 ${
                  selectedDay === day ? "bg-yellow-500" : ""
                }`}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </div>
            ))}
          </div>
        )}

        <h2 className="text-center text-2xl font-bold mb-4">
          Console pada hari {selectedDay}
        </h2>
        {errorMessage && (
          <p className="text-center text-red-600 font-semibold mt-6">
            {errorMessage}
          </p>
        )}
        {selectedDay === "Kamis" && (
          <p className="text-center text-gray-600 font-semibold mt-6">
            Tidak ada console yang tersedia pada hari {selectedDay}, silakan memilih hari yang lain.
          </p>
        )}
        <div className="grid grid-cols-3 gap-6">
          {filteredConsoles.map((console) => (
            <div
              key={console.id}
              className="bg-yellow-400 flex flex-col items-center p-4 rounded shadow-md relative transform hover:scale-105 transition-transform duration-300"
              onClick={() => handleConsoleClick(console)}
            >
              <div
                className={`absolute top-2 right-2 h-4 w-4 rounded-full ${
                  console.available ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
              <img src={console.logo} alt={console.name} className="h-20 mb-4" />
              <span className="font-bold">{console.name}</span>
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

export default ConsolePage;
