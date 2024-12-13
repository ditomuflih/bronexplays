import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogoClick = () => {
    navigate('/'); // Mengarahkan ke halaman landing page
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi jika username dan password kosong
    if (!username || !password) {
      setErrorMessage('Username dan/atau password tidak boleh kosong');
      return;
    }

    // Reset pesan error jika ada input
    setErrorMessage('');

    // Logika validasi username dan password
    if (username === 'mahasiswa' && password === 'mahasiswa123') {
      navigate('/mahasiswa'); // Arahkan ke halaman mahasiswa
    } else if (username === 'admin' && password === 'admin123') {
      navigate('/admin'); // Arahkan ke halaman admin
    } else {
      setErrorMessage('Username atau password salah!');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Header */}
      <header className="bg-blue-600 flex justify-between items-center p-4">
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <img src="/image.png" alt="Logo BRONEXPLAYS" className="h-20" />
          <h1 className="text-white ml-2 font-bold text-lg">BRONEXPLAYS</h1>
        </div>
        <button className="bg-yellow-400 text-black font-bold px-14 py-5 rounded hover:bg-yellow-500 transition duration-300">
          LOGIN
        </button>
      </header>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Left Section */}
        <div
          className="w-1/2 flex items-center justify-center bg-cover bg-center transition-opacity duration-500 ease-in-out"
          style={{ backgroundImage: `url('/bgimage.png')` }}
        >
          <img
            src="/image.png"
            alt="Logo BRONEXPLAYS"
            className="max-w-[80%] max-h-[80%] object-contain opacity-90 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center bg-white transition-transform duration-500 ease-in-out">
          <div className="w-full max-w-md p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                />
              </div>
              {errorMessage && (
                <p
                  className="text-red-500 text-sm mb-4 transition-all duration-500 ease-in-out opacity-100"
                >
                  {errorMessage}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 shadow-lg transition duration-300 ease-in-out"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
