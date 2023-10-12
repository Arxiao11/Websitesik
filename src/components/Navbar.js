import React, { useState } from 'react';

function Navbar() {
  const [showPublikSubMenu, setShowPublikSubMenu] = useState(false);
  const [showKemahasiswaanSubMenu, setShowKemahasiswaanSubMenu] = useState(false);

  const togglePublikSubMenu = () => {
    setShowPublikSubMenu(!showPublikSubMenu);
  };

  const toggleKemahasiswaanSubMenu = () => {
    setShowKemahasiswaanSubMenu(!showKemahasiswaanSubMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
  <img src="https://sik-kdserang.upi.edu/wp-content/uploads/2022/09/logo-1024x245.png" alt="Logo" /></div>

      <ul className="nav-links">
        <li><a href="/">Beranda</a></li>
        <li onMouseEnter={togglePublikSubMenu} onMouseLeave={togglePublikSubMenu}>
          <a href="#">Profil</a>
          {showPublikSubMenu && (
            <ul className="submenu">
              <li><a href="Sejarah.js">Sejarah</a></li>
              <li><a href="#">Visi Misi</a></li>
              <li><a href="#">Akreditasi</a></li>
              <li><a href="#">Struktur Organisasi</a></li>
              <li><a href="#">Dosen</a></li>
              <li><a href="#">Download</a></li>
            </ul>
          )}
        </li>
        <li><a href="#">Akademik</a></li>
        <li><a href="#">Fasilitas</a></li>
        <li onMouseEnter={toggleKemahasiswaanSubMenu} onMouseLeave={toggleKemahasiswaanSubMenu}>
          <a href="#">Kemahasiswaan</a>
          {showKemahasiswaanSubMenu && (
            <ul className="submenu">
              <li><a href="#">Beasiswa</a></li>
              <li><a href="#">Prestasi</a></li>
              <li><a href="#">MBKM</a></li>
              <li><a href="#">HIMASTAKA</a></li>
            </ul>
          )}
        </li>
        <li><a href="#">Berita</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

