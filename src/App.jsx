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
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <header className="text-center space-y-4">
          <p className="text-amber-500 font-semibold tracking-widest uppercase text-xs sm:text-sm">
            In Honor Of
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            <span className="whitespace-nowrap">Mr. Yusuf</span> <span className="whitespace-nowrap">Olufowobi</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            Generosity • Quiet Wisdom • Relentless Hard Work
          </p>
          <blockquote className="italic text-gray-400 text-xs sm:text-sm pt-2">
            "A digital tribute built with gratitude and respect."
          </blockquote>
        </header>

        {/* Core Values Section */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-amber-500">
            Core Values & Character
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">Generosity</h3>
              <p className="text-gray-400 text-sm">
                Always giving selflessly to support others and investing in their growth and success.
              </p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">Quiet Wisdom</h3>
              <p className="text-gray-400 text-sm">
                Offering thoughtful advice and leading by calm, measured example.
              </p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">Relentless Hard Work</h3>
              <p className="text-gray-400 text-sm">
                Demonstrating dedication and perseverance in every commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Notes / Tribute Wall Section */}
        <section className="space-y-8 bg-gray-900/50 border border-gray-800/80 p-6 sm:p-8 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-bold text-center text-white">
            Leave a Tribute Note
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Enter your name..."
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your appreciation message..."
                rows="4"
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold py-3 px-6 rounded-xl transition-colors shadow-lg"
            >
              Send Tribute
            </button>
          </form>

          {/* Display Notes Feed */}
          <div className="space-y-4 pt-6 border-t border-gray-800">
            <h3 className="text-lg font-bold text-gray-200 text-center">
              Appreciation Wall ({notes.length})
            </h3>

            <div className="space-y-4 max-w-xl mx-auto">
              {notes.length === 0 ? (
                <p className="text-center text-gray-500 text-sm italic">
                  No notes yet. Be the first to leave a tribute!
                </p>
              ) : (
                notes.map((note) => (
                  <div
                    key={note.id}
                    className="bg-gray-950 border border-gray-800 p-5 rounded-2xl space-y-2 shadow-md"
                  >
                    <p className="text-gray-200 text-sm sm:text-base italic">
                      "{note.message}"
                    </p>
                    <p className="text-amber-500 font-semibold text-xs text-right">
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