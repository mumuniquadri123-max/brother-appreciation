import React from 'react';
import ValueCard from './components/ValueCard';
import LetterSection from './components/LetterSection';
import NotesSection from './components/NotesSection';

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header-section">
        <div className="badge-wrapper">
          <span className="honor-badge">In Honor Of</span>
        </div>
        <h1 className="main-title">
          <span className="nowrap">Mr. Yusuf</span> <span className="nowrap">Olufowobi</span>
        </h1>
        <p className="traits-subtitle">
          Generosity • Quiet Wisdom • Relentless Hard Work
        </p>
        <blockquote className="tribute-quote">
          "A digital tribute built with gratitude, respect, and enduring appreciation."
        </blockquote>
      </header>

      {/* Core Values Section (All 6 Cards) */}
      <section className="values-section">
        <div className="section-header-wrap">
          <h2 className="section-heading">Core Values & Character</h2>
          <p className="section-subtext">The foundational pillars that define his remarkable impact.</p>
        </div>
        
        <div className="values-grid">
          <ValueCard 
            title="Generosity" 
            description="Always giving selflessly to support others and investing wholeheartedly in their growth and success." 
          />
          <ValueCard 
            title="Quiet Wisdom" 
            description="Offering thoughtful, measured guidance and leading by a calm, dependable example." 
          />
          <ValueCard 
            title="Relentless Hard Work" 
            description="Demonstrating extraordinary dedication, discipline, and perseverance in every commitment." 
          />
          <ValueCard 
            title="Faith & Integrity" 
            description="Living with sincere principles, unwavering moral clarity, and deep personal devotion." 
          />
          <ValueCard 
            title="Patience & Grace" 
            description="Approaching challenges with a steady temperament, extending grace and understanding to all." 
          />
          <ValueCard 
            title="Inspiring Legacy" 
            description="Creating lasting positive impact that empowers future generations to strive for excellence." 
          />
        </div>
      </section>

      {/* Letter Section */}
      <LetterSection />

      {/* Notes / Appreciation Wall Section */}
      <NotesSection />
    </div>
  );
}

export default App;