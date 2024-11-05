import React from 'react';
import './Footer.css'; // Pastikan untuk mengimpor file CSS yang relevan
import logo from '../img/1.jpg'; 
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Ikon dari react-icons
import { SiTiktok } from 'react-icons/si';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                {/* Logo di kiri */}
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                </div>

                {/* Tautan di tengah */}
                <div className="footer-nav">
                    <nav>
                        <a href="#">Beranda</a>
                        <a href="#">Produk</a>
                        <a href="#">Tentang</a>
                    </nav>
                </div>

                {/* Ikon media sosial di kanan */}
                <div className="footer-social">
                    <a href="https://www.facebook.com/share/17yvYTcugU/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/sniaa_t/profilecard" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@snia4_t?_t=8r80sXXDPq4&_r=1" target="_blank" rel="noopener noreferrer">
                        <SiTiktok />
                    </a>
                </div>
            </div>
            <span>&copy; Website Bisnis &bull; All rights reserved.</span>
        </footer>
    );
}

export default Footer;
