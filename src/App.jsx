import React, { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error('Failed to fetch notes:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!senderName || !message) return;

    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender_name: senderName, message }),
      });
      const newNote = await res.json();
      setNotes([newNote, ...notes]);
      setSenderName('');
      setMessage('');
    } catch (err) {
      console.error('Failed to save note:', err);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b0f17', color: '#f3f4f6', padding: '3rem 1rem', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Header Section */}
        <header style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <p style={{ color: '#f59e0b', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem', margin: 0 }}>
            In Honor Of
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', color: '#ffffff', margin: 0, lineHeight: 1.2 }}>
            <span style={{ whiteSpace: 'nowrap' }}>Mr. Yusuf</span> <span style={{ whiteSpace: 'nowrap' }}>Olufowobi</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '1rem', fontWeight: '500', margin: 0 }}>
            Generosity • Quiet Wisdom • Relentless Hard Work
          </p>
          <blockquote style={{ fontStyle: 'italic', color: '#9ca3af', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
            "A digital tribute built with gratitude and respect."
          </blockquote>
        </header>

        {/* Core Values Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', textAlign: 'center', color: '#f59e0b', margin: 0 }}>
            Core Values & Character
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginTop: 0, marginBottom: '0.5rem' }}>Generosity</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                Always giving selflessly to support others and investing in their growth and success.
              </p>
            </div>
            
            <div style={{ backgroundColor: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginTop: 0, marginBottom: '0.5rem' }}>Quiet Wisdom</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                Offering thoughtful advice and leading by calm, measured example.
              </p>
            </div>
            
            <div style={{ backgroundColor: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginTop: 0, marginBottom: '0.5rem' }}>Relentless Hard Work</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                Demonstrating dedication and perseverance in every commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Notes / Tribute Wall Section */}
        <section style={{ backgroundColor: 'rgba(17, 24, 39, 0.7)', border: '1px solid #1f2937', padding: '2rem', borderRadius: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', textAlign: 'center', color: '#ffffff', margin: 0 }}>
            Leave a Tribute Note
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '550px', width: '100%', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Your Name
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Enter your name..."
                required
                style={{ width: '100%', backgroundColor: '#0b0f17', border: '1px solid #1f2937', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#ffffff', fontSize: '0.95rem', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your appreciation message..."
                rows="4"
                required
                style={{ width: '100%', backgroundColor: '#0b0f17', border: '1px solid #1f2937', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#ffffff', fontSize: '0.95rem', resize: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <button
              type="submit"
              style={{ width: '100%', backgroundColor: '#f59e0b', color: '#0b0f17', fontWeight: '700', padding: '0.85rem 1.5rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontSize: '1rem', marginTop: '0.5rem' }}
            >
              Send Tribute
            </button>
          </form>

          {/* Display Notes Feed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #1f2937' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#e5e7eb', textAlign: 'center', margin: 0 }}>
              Appreciation Wall ({notes.length})
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '550px', width: '100%', margin: '0 auto' }}>
              {notes.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  No notes yet. Be the first to leave a tribute!
                </p>
              ) : (
                notes.map((note) => (
                  <div
                    key={note.id}
                    style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', padding: '1.25rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                  >
                    <p style={{ color: '#e5e7eb', fontSize: '0.95rem', fontStyle: 'italic', margin: 0 }}>
                      "{note.message}"
                    </p>
                    <p style={{ color: '#f59e0b', fontWeight: '600', fontSize: '0.8rem', textAlign: 'right', margin: 0 }}>
                      — {note.sender_name}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;