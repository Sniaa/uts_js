import React from 'react';
import './Header.css';
import '../App.css'; // Perhatikan bahwa ekstensi seharusnya huruf kecil, 'App.css' bukan 'App.CSS'
import logo from '../img/1.jpg'; // Impor gambar

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <a href="#">Beranda</a>
                <a href="#">Produk</a>
                <a href="#">Tentang</a>
                <button>Log In</button>
                <button>Register</button>
            </nav>
        </header>
    );
}

export default Header;
