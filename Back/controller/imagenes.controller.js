const fs = require("fs");
const path = require("path");

const subirImagen = async (req, res) => {
    try {
        const id = req.body.id_producto;

        if (!req.files || req.files.length === 0) {
            return res.status(400).send("No se recibieron imágenes");
        }

        req.files.forEach(file => {//hacerlo para cada imagne
            const rutaAntigua = file.path; 
            const ext = path.extname(file.originalname);

            const nuevoNombre = `${id}-${Date.now()}-${file.originalname}`;//ahora nesesitamos usar los nombres del archivo por que todos llevan la misma date
            const rutaNueva = path.join("images", nuevoNombre);

            fs.renameSync(rutaAntigua, rutaNueva);
        });

        res.status(200).send("Imágenes subidas correctamente");

    } catch (error) {
        console.error(error);
        res.status(500).send("Error al subir imágenes");
    }
};


const encontrar = (req, res) => {
    const numero = req.params.numero;
    const dir = "./images";

    fs.readdir(dir, (err, files) => {
        if (err) return res.status(500).json({ error: "Error al leer la carpeta." });

        const filtradas = files
            .filter(f => f.startsWith(numero)) // solo las que empiecen con el ID
            .map(file => ({
                filename: file,
                url: `http://localhost:3000/images/${file}` // URL pública jaja puedes buscarla
            }));

        res.json(filtradas);
    });
};



module.exports={
    subirImagen,
    encontrar
}