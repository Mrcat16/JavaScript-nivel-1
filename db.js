const Database = require('better-sqlite3');
const db = new Database('app.db');

// Crea la tabla si no existe
db.exec(`
  CREATE TABLE IF NOT EXISTS registros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria TEXT,
    valor TEXT
  )
`);


function guardarDato(categoria, valor) {
  const stmt = db.prepare('INSERT INTO registros (categoria, valor) VALUES (?, ?)');
  stmt.run(categoria, valor);
}

module.exports = guardarDato;