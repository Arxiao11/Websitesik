import React from 'react';
import './content.css';

const Content = () => {
  return (
    <div className="content-container">
      <div className="content">
        <br></br>
        <h3>Sistem Informasi Kelautan <hr class="hr-bold"></hr></h3>
        <div className="video-container">
        {/* Menyematkan video YouTube */}
        <iframe
          width="300"
          height="315"
          src="https://www.youtube.com/embed/uSpL9GR0QaI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
        <div className="video-info">
          <p>Program Studi Sistem Informasi Sistem Kelautan merupakan bagian dari Ilmu Kelautan yang fokus pada analisis data kelautan baik numerik maupun spasial untuk 
            kemudian diintegrasikan berbasis sistem informasi yang dikembangkan sebagai dasar pengambilan keputusan.</p>
          <button className="orange-button">Selengkapnya</button>
        </div>
      </div>
      </div>
      <div class="sidebar">
                <h2>Tautan Cepat</h2>
                <nav class="menu-artikel">
                    <ul>
                        <li><a href="#">Kampus Upi Serang</a></li>
                        <li><a href="#">Leaflet SIK [2019]</a></li>
                        <li><a href="#">Company Profil</a></li>
                        <li><a href="#">Jurnal</a></li>
                        <li><a href="#">Sistem Informasi Akademik</a></li>
                        <li><a href="#">Pilmapres SIK [2021]</a></li>
                        <li><a href="#">Video Company Profil</a></li>
                        <li><a href="#">Info Beasiswa</a></li>
            
                    </ul>
                </nav>
            </div>
        </div>
  );
}

export default Content;
