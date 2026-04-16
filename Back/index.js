require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const fs = require("fs");
const path = require("path");

//archivos
const usuarios= require("./router/user.routes");
const pool =require("./db/conexion");
const recibe=require("./router/imagen.routes");
const musica=require("./router/music.routes");

//extras
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


//rutas
app.get('/', (req, res) => {//para pr
    res.send('Back funcionando con ganotas');
});

app.use("/images", express.static(path.join(__dirname, "images"))); //hacer la carpeta imagenes publica

app.use("/usuarios",usuarios);

app.use("/imagenes",recibe);

app.use("/musica",musica);


const ALLOWED_ORIGINS = [
  'http://localhost:4200',
  'http://127.0.0.1:4200',
];
app.use(cors({ 
  origin: function (origin, callback) {
    
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS: ' + origin));
  },

  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],

  optionsSuccessStatus: 200
}));






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
