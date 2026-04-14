const model = require("../model/user.model");


const createUser = async (req, res) => {
    try{
        const {nombre,correo,contrasena}=req.body;
        if(!nombre || !correo || ! contrasena){
            return res.status(400).json({mesaje: "falta de datos"});
        }
        const igual= await model.coincidencias(correo);

        if(igual){
            res.status(400).json({mensaje: "Cuenta ya creada"});
            return;
        }
        const id=await model.userNew(nombre, contrasena, correo);

        return res.status(200).json({mensaje: "cuenta creada exitosamente",id});//regresar id
    }catch(error){
        console.error("error al crear usuario", error);
        res.status(500).json({ mensaje: "Error al crear el usuario" });
    }

}

const loginIn= async (req,res)=>{
    try{
        const {correo, contrasena}= req.body;

        if(!correo || !contrasena){
            res.status(400).json({mensaje: "Datos insuficientes"});
            return;
        }
        const encontrado= await model.entrar(contrasena,correo);
        if(!encontrado){
            return res.status(400).json({mensaje:" usuario no encontrado"});
        }

        return res.status(200).json({mensaje: "exito al logear",encontrado});//regresa nombre corroo y ID


    }catch(error){
        console.error("error al logear", error);
        res.status(500).json({mensaje: "Error al logearse"});

    }


}


const obtenerDatos = async (req,res)=>{
    try{
        const {id}=req.body;
        const persona= await model.buscar(id);
        if(!persona){
            return res.status(400).json({mesaje: "id no encontrado"}); 
        }

        return res.status(500).json({mensaje: "datos encontrados", persona});
    }catch(error){
        console.log("error al logear", error)
        return res.status(500).json({mensaje: "Error al buscar datos"});
    }
}


module.exports={
    createUser,
    loginIn,
    obtenerDatos
}