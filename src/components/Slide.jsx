import React from 'react';
import './Slide.css'; // Mengimpor CSS Slide
import exampleImage from '../img/1.jpg'; // Pastikan gambar ini ada di folder yang benar

function Slide() {
    return (
        <section className="slide">
            <div className="slide-content">
                <h1>Memberi Solusi Bisnis Anda</h1>
                <p>Nikmati pilihan Bisnis Anda seperti bisnis sewa kebaya yang 
                    berkualitas tinggi dengan desain elegan dan klasik, 
                    cocok untuk berbagai acara seperti pernikahan, 
                    wisuda, pesta formal, atau acara budaya.dan juga bisnis anda lainnya</p>
                <button>Produk Kami</button>
                <button>Pesan Sekarang</button>
            </div>
            <div className="slide-image">
                <img src={exampleImage} alt="Contoh Gambar" />
            </div>
        </section>
    );
}

export default Slide;
