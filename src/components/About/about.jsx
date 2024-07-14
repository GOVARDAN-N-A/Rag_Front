import React from 'react';

const AboutPage = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative', // Ensure positioning for overlay
        overflow: 'hidden', // Hide overflow to prevent scrollbars
      }}
    >
      {/* Background image with faded effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('https://th.bing.com/th/id/OIG3.SX3NFT7l52FZoulLYGBn?pid=ImgGn')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) brightness(0.8)', // Apply blur and brightness for fading effect
          zIndex: -100, // Ensure the background stays behind content
        }}
      ></div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '50px',
          color: '#000', // Adjust text color if needed
          zIndex: 1, // Ensure content is above the background
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          Connecting Communities with Local Rag Pickers for a Cleaner Tomorrow
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
          Find Rag Pickers | Join as Rag Picker
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ width: '50%', borderBottom: '2px solid #fff' }}></div>
        </div>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>How It Works</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '50%', borderBottom: '2px solid #fff' }}></div>
        </div>
        <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px', fontSize: '1.2rem' }}>
          <p>
            <strong>Search:</strong> Find local rag pickers who are ready to collect waste in your area.
          </p>
          <p>
            <strong>Book:</strong> Schedule a pick-up time that suits you best.
          </p>
          <p>
            <strong>Clean:</strong> Get your waste picked up and recycled, contributing to a cleaner environment.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <div style={{ width: '50%', borderBottom: '2px solid #fff' }}></div>
        </div>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', marginTop: '40px' }}>Our Features</h2>
        <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px', fontSize: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div style={{ width: '45%', marginBottom: '20px' }}>
              <p>Easy Booking</p>
            </div>
            <div style={{ width: '45%', marginBottom: '20px' }}>
              <p>Verified Pickers</p>
            </div>
            <div style={{ width: '45%', marginBottom: '20px' }}>
              <p>Transparent Pricing</p>
            </div>
            <div style={{ width: '45%', marginBottom: '20px' }}>
              <p>Secure Payments</p>
            </div>
            <div style={{ width: '45%', marginBottom: '20px' }}>
              <p>Real-Time Tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
