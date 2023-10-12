import React from 'react';
import './Berita.css';

const NewsContent = () => {
  return (
    <div>
        <h1>Berita Terkini<hr className='hr-bold'></hr></h1>
    <div className="news-container">
      <div className="news-box">
        <img
          src="https://sik-kdserang.upi.edu/wp-content/uploads/2023/10/Template-Kotak-1-1.jpg"
          alt="Berita 1"
          className="news-image"
        />
        <h3>Registrasi Terbuka untuk Incoma 2 : Menuju Poros Maritim Dunia </h3>
        <br></br>
        <p>BACA SELENGKAPNYA</p>
        <hr></hr>
      </div>
      <div className="news-box">
        <img
          src="https://sik-kdserang.upi.edu/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-10-at-23.32.58.jpeg"
          alt="Berita 2"
          className="news-image"
        />
        <h3>Prodi Sistem Informasi Kelautan UPI Serang Membuka Pendaftaran Calon Aparatur Sipil Negara Tahun 2023 </h3>
        <p>BACA SELENGKAPNYA</p>
        <hr class="hr"></hr>
      </div>
      <div className="news-box">
        <img
          src="https://sik-kdserang.upi.edu/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-11-at-00.06.24.jpeg"
          alt="Berita 3"
          className="news-image"
        />
        <h3>Himastaka UPI Serang: Mewujudkan Kebahagian Melalui Pengabdian di Desa Tejang, Pulau Sebesi </h3>
        <p>BACA SELENGKAPNYA</p>
        <hr></hr>
      </div>
    </div>
    </div>
  );
}

export default NewsContent;

