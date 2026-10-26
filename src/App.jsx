import React from 'react';
import ValueCard from './components/ValueCard';
import LetterSection from './components/LetterSection';
import NotesSection from './components/NotesSection';

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header-section">
        <p className="subtitle-honor">In Honor Of</p>
        <h1 className="main-title">
          <span className="nowrap">Mr. Yusuf</span> <span className="nowrap">Olufowobi</span>
        </h1>
        <p className="traits-subtitle">
          Generosity • Quiet Wisdom • Relentless Hard Work
        </p>
        <blockquote className="tribute-quote">
          "A digital tribute built with gratitude and respect."
        </blockquote>
      </header>

      {/* Core Values Section */}
      <section className="values-section">
        <h2 className="section-heading">Core Values & Character</h2>
        <div className="values-grid">
          <ValueCard 
            title="Generosity" 
            description="Always giving selflessly to support others and investing in their growth and success." 
          />
          <ValueCard 
            title="Quiet Wisdom" 
            description="Offering thoughtful advice and leading by calm, measured example." 
          />
          <ValueCard 
            title="Relentless Hard Work" 
            description="Demonstrating dedication and perseverance in every commitment." 
          />
          <ValueCard 
            title="Faith & Integrity" 
            description="Living with sincere principles, humility, and devotion." 
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