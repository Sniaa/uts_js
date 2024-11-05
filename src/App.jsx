import React from 'react';
import Header from './components/Header';
import Slide from './components/Slide';
import Card from './components/Card';
import Konsultasi from './components/Konsultasi';
import Footer from './components/Footer';
import './main';
import './App';

function App() {
    return (
        <div className="App">
            <Header />
            <Slide />
            <Card />
            <Konsultasi />
            <Footer />
        </div>
    );
}

export default App;
