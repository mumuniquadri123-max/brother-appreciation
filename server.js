import express from 'express'
import cors from 'cors'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const app = express()
const PORT = 5000

// Middleware: Allows React (port 5173) to send requests to Express (port 5000)
app.use(cors())
app.use(express.json())

// Initialize SQLite Database
let db

async function setupDatabase() {
  db = await open({
    filename: './notes.db',
    driver: sqlite3.Database
  })

  // Create table for appreciation notes if it doesn't exist yet
  await db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sender_name TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  console.log('Connected to SQLite Database.')
}

setupDatabase()

// API Route 1: GET all appreciation notes from database
app.get('/api/notes', async (req, res) => {
  try {
    const notes = await db.all('SELECT * FROM notes ORDER BY created_at DESC')
    res.json(notes)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes' })
  }
})

// API Route 2: POST a new appreciation note into database
app.post('/api/notes', async (req, res) => {
  const { sender_name, message } = req.body

  if (!sender_name || !message) {
    return res.status(400).json({ error: 'Name and message are required' })
  }

  try {
    const result = await db.run(
      'INSERT INTO notes (sender_name, message) VALUES (?, ?)',
      [sender_name, message]
    )

    const newNote = {
      id: result.lastID,
      sender_name,
      message,
      created_at: new Date()
    }

    res.status(201).json(newNote)
  } catch (error) {
    res.status(500).json({ error: 'Failed to save note' })
  }
})

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})