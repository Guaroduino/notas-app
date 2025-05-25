const db = require('./database.js'); // <--- AÑADE ESTA LÍNEA

const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: 'Servidor de Notas Activo' });
});

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
