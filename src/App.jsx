import './App.css'
import ValueCard from './components/ValueCard'
import LetterSection from './components/LetterSection'
import NotesSection from './components/NotesSection'

function App() {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero">
        <p className="subtitle">IN HONOR OF</p>
        <h1>Mr. Yusuf Olufowobi</h1>
        <p className="tagline">Generosity • Quiet Wisdom • Relentless Hard Work</p>
        <p className="tribute-note">"A digital tribute built with gratitude and respect."</p>
      </header>

      {/* Values & Impact Section */}
      <main className="values-section">
        <h2>Core Values & Character</h2>
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
      </main>
      {/* LETTER SECTION */}
    <  LetterSection/>
    {/* BACKEND  */}
   <NotesSection />
    </div>
  )
}

export default App