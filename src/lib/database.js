// src/lib/database.js
import Database from 'better-sqlite3';

// Initialize SQLite database (creates feedback.db in project root)
const db = new Database('feedback.db', { verbose: console.log });

// Create feedback table if it doesn’t exist
db.exec(`
  CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    feedback TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;