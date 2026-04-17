const modelM=require("../model/music.model");

//rutas
//montar
//subur
const subirMusica =async (req,res)=>{
    const {titulo,artista,albun,fecha,letra}=req.body;

    try{
        //busca que no haya artista y nombre igual en otra cancion LOL
        const coincidencias= await modelM.coincidencias(titulo,artista);

        if(coincidencias.length > 0){
            return res.status(400).json({mensaje: "Ya existe esta cancion!"});
        }

        //next Step
        const idCancion= await modelM.subirMusica(titulo,artista,albun,fecha,letra);

        res.status(201).json({mensaje: "correcta subida", idCancion});
    }catch(error){
        console.log("Algun error al subir la cancion!",error);
        return res.status(500).json({mensaje: "Hubo amgun error"});
    }

}
//consultar
const consultarCancion=async (req,res)=>{
    const {id}=req.params;

    try{
        const cancion= await modelM.consultarCancion(id);


        res.status(200).json({mensaje: "Exito al consultar cancion", cancion});

    }catch(error){
        console.log("Algun error al consultar la cancion!",error);
        return res.status(500).json({mensaje: "Hubo amgun error"});
    }
}

//editar
const editarCancion=async (req,res)=>{
    const {id, titulo, artista, albun, fecha, letra}= req.body;

    try{

        const cambio= await modelM.modificarCancion(id, titulo, artista, albun, fecha, letra);
        if(cambio == 0){
            return res.status(404).json({mensaje: "Algun error al editar"});
        }

        return res.status(200).json({mensaje: "cambio realizado", cambio: 1});
    }catch(error){
        console.log("Algun error al editar la cancion!",error);
        return res.status(500).json({mensaje: "Hubo amgun error"});
    }
}

//borrar
const borrarCancion= async(req,res)=>{
    const {id}=req.body;

    try{
        const cambio= await modelM.borrarCancion(id);
        if(cambio == 0){
            return res.status(404).json({mensaje: "Algun error al borrar"});
        }

        return res.status(200).json({mensaje: "Borrado exitosamente",cambio: 1});

    }catch(error){
        console.log("Algun error al borrar la cancion!",error);
        return res.status(500).json({mensaje: "Hubo amgun error"});
    }
}

//like
 const agregarLike=async function(req,res){
    const {id}=req.body;

    try{
        const cambio= await modelM.like(id);
        if(cambio == 0){
            return res.status(404).json({mensaje: "algun erro al procesar el like"});
        }

        return res.status(200).json({mensaje: "like exitoso",cambio: 1});

    }catch(error){
        console.log("Algun error al dar like a la cancion!",error);
        return res.status(500).json({mensaje: "Hubo amgun error"});
    }
 }

//buscador Logica
async function buscador(req,res) {
    const {titulo}= req.body;

    try{
        const lista= await modelM.consultarMusica(titulo);

        if(lista.length === 0){
            return res.status(404).json({mensaje: "ninguna cancion con ese titulo"});
        }

        return res.status(200).json({mensaje: "Lista de cancionnes",lista});


    }catch(error){
        console.log("Algun error en el buscador!",error);
        return res.status(500).json({mensaje: "Hubo amgun error"});
    }
}

async function masLikes(req,res) {
    try{
        const lista= await modelM.masLikes();
        return res.status(200).json({mensaje: "Mas Likeadas! ",lista});

    }catch(error){
        console.log("Algun error al mostrar los likes");
        return res.status(500).json({mensaje: "Hubo algun error"});

    }    
}

module.exports = {
    subirMusica,
    consultarCancion,
    editarCancion,
    borrarCancion,
    agregarLike,
    buscador, 
    masLikes
};