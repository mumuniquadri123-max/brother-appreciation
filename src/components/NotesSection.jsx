import { useState, useEffect } from 'react'

const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api/notes' 
  : '/api/notes';

function NotesSection() {
  const [notes, setNotes] = useState([])
  const [senderName, setSenderName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchNotes = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      setNotes(data)
    } catch (error) {
      console.error('Error fetching notes:', error)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!senderName || !message) return

    setLoading(true)
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sender_name: senderName,
          message: message
        })
      })

      if (response.ok) {
        setSenderName('')
        setMessage('')
        fetchNotes()
      }
    } catch (error) {
      console.error('Error sending note:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="notes-section">
      <div className="notes-header">
        <span className="section-tag">COMMUNITY & FAMILY</span>
        <h2>Appreciation Wall</h2>
        <p>Leave a note of thanks or encouragement for Mr. Yusuf Olufowobi.</p>
      </div>

      <form onSubmit={handleSubmit} className="note-form">
        <input 
          type="text" 
          placeholder="Your Name" 
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          required
        />
        <textarea 
          placeholder="Write your note of appreciation..." 
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Post Appreciation Note'}
        </button>
      </form>

      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="no-notes">No notes added yet. Be the first to leave a message!</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="note-card">
              <p className="note-text">"{note.message}"</p>
              <p className="note-sender">— {note.sender_name}</p>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default NotesSection