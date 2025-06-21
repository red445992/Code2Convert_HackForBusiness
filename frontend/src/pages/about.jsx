import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <header className="about-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="brand-highlight">PitchPilot</span>
            </h1>
            <p className="hero-subtitle">
              AI-powered content creation for early-stage founders. Launch fast, pitch smarter, and grow without friction.
            </p>
            <div className="hero-accent"></div>
          </div>
        </header>

        <section className="problem-section">
          <div className="section-content">
            <div className="section-header">
              <h2>The Challenge</h2>
              <div className="section-line"></div>
            </div>
            <p className="section-text">
              Most early founders struggle to express their startup's value. From writing cold emails to building a pitch deck, these tasks demand time, skills, and resources many don't have.
            </p>
          </div>
        </section>

        <section className="solution-section">
          <div className="section-content">
            <div className="section-header">
              <h2>Our Solution</h2>
              <div className="section-line solution-line"></div>
            </div>
            <p className="section-text">
              PitchPilot empowers founders with AI-generated <strong>cold emails</strong>, <strong>pitch decks</strong>, and <strong>one-pagers</strong> — all in minutes, not days.
            </p>
          </div>
        </section>

        <section className="features-section">
          <div className="section-content">
            <div className="section-header">
              <h2>What You Can Do</h2>
              <div className="section-line"></div>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✉️</div>
                <h3>Cold Emails</h3>
                <p>Generate sales emails that actually get replies and convert prospects into customers.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Pitch Decks</h3>
                <p>Create clear and investor-ready deck structures that tell your story effectively.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📄</div>
                <h3>One-Pagers</h3>
                <p>Summarize your startup vision with ease and clarity in a single compelling page.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="target-section">
          <div className="section-content">
            <div className="section-header">
              <h2>Who It's For</h2>
              <div className="section-line"></div>
            </div>
            <div className="target-grid">
              <div className="target-item">
                <span className="target-label">B2B Solo Founders</span>
              </div>
              <div className="target-item">
                <span className="target-label">Lean Startup Teams</span>
              </div>
              <div className="target-item">
                <span className="target-label">Strategic Consultants</span>
              </div>
            </div>
            <p className="target-description">
              PitchPilot is your go-to-market secret weapon for creating professional content without the overhead.
            </p>
          </div>
        </section>

        <footer className="about-footer">
          <div className="footer-content">
            <p className="footer-text">Let AI handle the content. You focus on building the future.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;