const express = require("express");
const router = express.Router();

const musica = require("../controller/music.controller");


router.post("/subir",musica.subirMusica);

router.get("/consulta/:id",musica.consultarCancion);//canciones con numero 

router.put("/editar",musica.editarCancion);

router.delete("/borrar",musica.borrarCancion);

router.post("/gustar",musica.agregarLike);

router.get("/lista",musica.buscador);//lista de canciones

module.exports=router;