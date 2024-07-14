import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import verified from './Images/verified.png';
import price from './Images/price.png';
import secure_payment from './Images/secure.png';
import rtt from './Images/rtt.png';
import home_img from './Images/home.png';

function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f7f7', color: '#333', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* <Navbar /> */}
      
      <section style={{
        textAlign: 'center',
        padding: '3rem',
        backgroundImage: `url(${home_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        color: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 4px #000' }}>Connecting Communities with Local Rag Pickers for a Cleaner Tomorrow</h1>
        <div style={{ marginTop: '2rem' }}>
          <button style={{
            margin: '0.5rem',
            padding: '1rem 2rem',
            backgroundColor: '#0066cc',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            transition: 'background-color 0.3s ease'
          }}>
            <Link to="/rag" style={{ color: '#fff', textDecoration: 'none' }}>Find Rag Pickers</Link>
          </button>
          <button style={{
            margin: '0.5rem',
            padding: '1rem 2rem',
            backgroundColor: '#0066cc',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            transition: 'background-color 0.3s ease'
          }}>
            <Link to="/join" style={{ color: '#fff', textDecoration: 'none' }}>Join as Rag Picker</Link>
          </button>
        </div>
      </section>
      
      <section style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#fff', color: '#333' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>How It Works</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ backgroundColor: '#f0f0f0', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flex: '1 1 250px', backgroundImage: 'url("https://example.com/image1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img src="https://tmpfiles.nohat.cc/full-m2i8i8m2G6d3A0N4.png" alt="search" style={{ maxWidth: '100px', height: '100px' }} />

            <h3>Search</h3>
            <p>Find local rag pickers</p>
          </div>
          <div style={{ backgroundColor: '#f0f0f0', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flex: '1 1 250px', backgroundImage: 'url("https://example.com/image2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img src="https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-colorful-book-now-sticker-offer-design-free-vector-download-png-image_6350741.png" alt="book" style={{ maxWidth: '100px', height: '100px' }} />

            <h3>Book</h3>
            <p>Schedule a pick-up</p>
          </div>
          <div style={{ backgroundColor: '#f0f0f0', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flex: '1 1 250px', backgroundImage: 'url("https://example.com/image3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src='./clean.png' alt="clean" style={{ maxWidth: '100px', height: '100px' }} />
            <h3>Clean</h3>
            <p>Get your waste picked up and recycled</p>
          </div>
        </div>
      </section>
      
      <section style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#f7f7f7', color: '#333' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Features</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flex: '1 1 200px', backgroundImage: 'url("https://example.com/feature1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src="./easy.png" alt="easy" style={{ maxWidth: '100px', height: '100px' }} />
            <h3>Easy Booking</h3>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flex: '1 1 200px' }}>
           <img src={verified} alt="verified" style={{ maxWidth: '100px', height: '100px' }} />
            <h3>Verified Rag Pickers</h3>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flex: '1 1 200px', backgroundImage: 'url("https://example.com/feature3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src={price} alt="price" style={{ maxWidth: '100px', height: '100px' }} />
            <h3>Transparent Pricing</h3>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flex: '1 1 200px', backgroundImage: 'url("https://example.com/feature4.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src={secure_payment} alt="secure" style={{ maxWidth: '100px', height: '100px' }} />           
            <h3>Secure Payments</h3>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flex: '1 1 200px', backgroundImage: 'url("https://example.com/feature5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src={rtt} alt="Real Time Tracking"  style={{ maxWidth: '100px', height: '100px' }}/>          
            <h3>Real-Time Tracking</h3>
          </div>
        </div>
      </section>
      
      <section style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#fff', color: '#333' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What Our Users Say</h2>
        <Carousel>
          <Carousel.Item>
            <div style={{ padding: '2rem' }}>
              <p>"This platform made it so easy to get rid of my recyclables. The rag picker was professional and prompt."</p>
              <h5>- Anjali P.</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ padding: '2rem' }}>
              <p>"Great service! I booked a pick-up and my waste was collected within hours."</p>
              <h5>- Rajesh K.</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ padding: '2rem' }}>
              <p>"I appreciate the transparency in pricing and the verified profiles of rag pickers. Highly recommend!"</p>
              <h5>- Priya S.</h5>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      

      <section style={{ padding: '3rem', display: 'flex', justifyContent: 'space-between', backgroundColor: '#333', color: '#fff' }}>
        <div style={{ flex: '1', padding: '1rem' }}>
          <h2>Contact Us</h2>
          <p>Email: support@ragpickerconnect.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Clean Street, Green City, Country</p>
        </div>
        <footer style={{ flex: '1', padding: '1rem', textAlign: 'right' }}>
          <p>&copy; 2024 Rag Picker Connect. All rights reserved.</p>
          <div>
            <Link to="/privacy" style={{ color: '#fff', textDecoration: 'none', marginRight: '1rem' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Home;
