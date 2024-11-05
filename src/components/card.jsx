import React from 'react';

function Card() {
    const data = [
        { count: '250+', label: 'Happy Clients' },
        { count: '600+', label: 'Completed Projects' },
        { count: '1.8K+', label: 'Available Resources' },
        { count: '11K+', label: 'Subscribers' }
    ];

    return (
        <section className="card-section">
            <h2>Perusahaan yang Telah Bergabung</h2>
            <p>Kami adalah perusahaan yang bergerak di bidang bisnis, 
                dan berdedikasi untuk memberikan produk dan layanan terbaik bagi pelanggan kami.
                Dengan pengalaman bertahun-tahun dan komitmen terhadap kualitas, 
                kami telah membangun reputasi yang solid dan dipercaya oleh banyak mitra serta pelanggan.</p>
            <div className="cards">
                {data.map((item, index) => (
                    <div key={index} className="card">
                        <h3>{item.count}</h3>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Card;
