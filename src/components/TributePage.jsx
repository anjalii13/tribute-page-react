import React from 'react'
import  '../index.css'

import { useState } from 'react'

function TributePage() {
  const [showMore, setShowMore] = useState(false)

  const achievements = [
    'Developed India’s missile technology',
    'Led Pokhran-II nuclear tests',
    'Served as the 11th President of India',
    'Inspired millions of students',
    'Author of Wings of Fire'
  ]

  const galleryImages = [
    'https://upload.wikimedia.org/wikipedia/commons/9/99/A._P._J._Abdul_Kalam.jpg',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
  ]

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Tribute Page</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#timeline">Journey</a>
          <a href="#gallery">Gallery</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="overlay"></div>

        <div className="hero-content">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/A._P._J._Abdul_Kalam.jpg"
            alt="APJ Abdul Kalam"
            className="profile-image"
          />

          <h1>Dr. A.P.J. Abdul Kalam</h1>

          <p className="subtitle">
            Missile Man of India | Scientist | Visionary Leader
          </p>

          <button
            className="hero-btn"
            onClick={() => alert('Dream Big and Work Hard!')}
          >
            Inspire Me
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-text">
          <h2>About</h2>

          <p>
            Dr. A.P.J. Abdul Kalam was one of India's greatest scientists and
            the 11th President of India. He inspired millions through his
            dedication, simplicity, and vision for a developed India.
          </p>

          <p>
            He played a significant role in India’s missile and space programs
            and became a role model for students across the nation.
          </p>

          {showMore && (
            <p>
              His speeches and books continue to motivate young minds to dream
              big, work hard, and contribute positively to society.
            </p>
          )}

          <button
            className="read-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </div>

        <div className="stats-card">
          <h3>Achievements</h3>

          <ul>
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section" id="timeline">
        <h2>Life Journey</h2>

        <div className="timeline-container">
          <div className="timeline-item">
            <h3>1931</h3>
            <p>Born in Rameswaram, Tamil Nadu.</p>
          </div>

          <div className="timeline-item">
            <h3>1960</h3>
            <p>Graduated in Aerospace Engineering.</p>
          </div>

          <div className="timeline-item">
            <h3>1980</h3>
            <p>Led India's SLV-III satellite launch project.</p>
          </div>
          <div className="timeline-item">
            <h3>2002</h3>
            <p>Became the 11th President of India.</p>
          </div>

          <div className="timeline-item">
            <h3>2015</h3>
            <p>Passed away while inspiring students during a lecture.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <h2>Gallery</h2>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-card" key={index}>
              <img src={image} alt="Gallery" />
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <blockquote>
          “Dream, dream, dream. Dreams transform into thoughts and thoughts
          result in action.”
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Created with React JS ❤️</p>
      </footer>
    </div>
  )
}

export default TributePage