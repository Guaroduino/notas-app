// database.js
const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "notas.db";

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
        throw err;
    } else {
        console.log('Conectado a la base de datos SQLite: ' + DBSOURCE);
        const createUserTableSql = `
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                created_at TEXT DEFAULT (datetime('now','localtime'))
            )
        `;
        db.run(createUserTableSql, (err) => {
            if (err) {
                console.error("Error al crear la tabla 'users':", err.message);
            } else {
                console.log("Tabla 'users' creada o ya existente.");
            }
        });
    }
});
module.exports = db;