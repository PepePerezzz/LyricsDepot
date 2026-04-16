const express = require("express");
const router = express.Router();

const { subirImagen, encontrar } = require("../controller/imagenes.controller.js");
const upload=require("../middleware/subirImagen.js");


router.post("/subir", upload.array("imagenes", 20), subirImagen);
router.get("/imagenes/:numero",encontrar);

module.exports = router;
