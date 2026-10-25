import express from 'express'
import cors from 'cors'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Serve static files from the React frontend build folder
app.use(express.static(path.join(__dirname, 'dist')))

let db

async function setupDatabase() {
  db = await open({
    filename: './notes.db',
    driver: sqlite3.Database
  })

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

// API Routes
app.get('/api/notes', async (req, res) => {
  try {
    const notes = await db.all('SELECT * FROM notes ORDER BY created_at DESC')
    res.json(notes)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes' })
  }
})

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

// Catch-all route to serve React frontend for any other URL request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})