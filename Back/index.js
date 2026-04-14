require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

const usuarios= require("./router/user.routes");


const pool =require("./db/conexion");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use("/usuarios",usuarios);


app.get('/', (req, res) => {
    res.send('Back funcionando con ganotas');
});

async function testConnection() {//prueba a base de datos
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result');
        console.log('Conexión a la base de datos Correcta. Resultado:', rows[0].result);
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error.message);
    }
}

app.listen(PORT, async () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    await testConnection(); // prueba a base de datos
});
