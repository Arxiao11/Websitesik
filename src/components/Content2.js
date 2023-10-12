import React from 'react';
import './Content2.css';
import gambar from './konten2.jpg'; 

const Content2 = () => {
  return (
    <div className="content2-container">
      <div className="content2"></div>
      <img src={gambar} alt="Gambar Konten" />
      <div className="content2-info">
        <h1>Penerimaan Mahasiswa Baru</h1>
        <p>Universitas Pendidikan Indonesia (UPI) sebagai salah satu Perguruan Tinggi Negeri Berbadan Hukum (PTN-BH) di Indonesia merupakan universitas dengan jati diri kependidikan.  
            Sebagai PTN maka penerimaan mahasiswa baru setiap tahunnya melalui jalur Seleksi Nasional Masuk Perguruan Tinggi Negeri (SNMPTN), Seleksi Bersama Masuk Perguruan Tinggi Negeri (SBMPTN), Seleksi Mandiri, dan Prestasi Istimewa.</p>
        <button className="orange-button">PBM UPI</button>
      </div>
    </div>
  );
}

export default Content2;
