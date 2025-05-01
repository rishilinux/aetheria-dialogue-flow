
import React from 'react';
import Header from '../components/Header';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page page-transition">
      <Header />
      
      <div className="about-container">
        <div className="about-header">
          <h1>About Aetheria</h1>
          <p className="about-subtitle">
            A sophisticated conversational AI designed for meaningful interactions
          </p>
        </div>

        <div className="timeline-section">
          <h2>Our Evolution</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p className="timeline-date">2023</p>
                <p>Aetheria began as a research project focused on creating more natural and intuitive AI conversations.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Learning Framework</h3>
                <p className="timeline-date">2024</p>
                <p>Development of our unique contextual understanding system that allows for more personalized interactions.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Public Release</h3>
                <p className="timeline-date">2025</p>
                <p>Aetheria launches to the public with a focus on thoughtful dialogue and meaningful assistance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="capabilities-section">
          <h2>Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <h3>Knowledge Base</h3>
              <p>Trained on a diverse range of topics including science, history, arts, and technology.</p>
            </div>
            
            <div className="capability-card">
              <h3>Contextual Awareness</h3>
              <p>Maintains conversation context to provide coherent and relevant responses.</p>
            </div>
            
            <div className="capability-card">
              <h3>Creative Assistance</h3>
              <p>Can help with brainstorming, writing, and other creative endeavors.</p>
            </div>
            
            <div className="capability-card">
              <h3>Continuous Learning</h3>
              <p>Improves through interactions and feedback to better serve users' needs.</p>
            </div>
          </div>
        </div>

        <div className="philosophy-section">
          <h2>Our Philosophy</h2>
          <div className="philosophy-content">
            <div className="philosophy-text">
              <p>At Aetheria, we believe AI should enhance human potential, not replace it. We design our systems to be transparent, ethical, and aligned with human values.</p>
              <p>Our mission is to create AI companions that provide valuable assistance while respecting privacy and encouraging thoughtful engagement.</p>
            </div>
            <div className="philosophy-image">
              <div className="image-placeholder">
                <div className="inner-circle"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Behind Aetheria</h2>
          <p className="team-intro">Our team consists of AI researchers, engineers, and ethicists committed to advancing conversational AI in a responsible way.</p>
        </div>
      </div>

      <div className="about-cta">
        <div className="cta-container">
          <h2>Ready to experience Aetheria?</h2>
          <p>Start a conversation and explore what our AI can do for you.</p>
          <a href="/chat" className="btn btn-primary">Begin Conversation</a>
        </div>
      </div>

      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-logo">AETHERIA</div>
          <div className="copyright">© 2025 Aetheria AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
