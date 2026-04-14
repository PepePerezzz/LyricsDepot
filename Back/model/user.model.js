const pool = require("../db/conexion");


async function coincidencias(correo) {
  const [rows] = await pool.query(
    "SELECT * FROM usuarios WHERE correo = ?",
    [correo]
  );

  if (rows.length === 0) {
    return null;
  }
  
  return rows[0].id;
}

async function userNew(nombre, contrasena, correo) {
  const [rows] = await pool.query(
    "INSERT INTO usuarios (nombre, contrasena, correo) VALUES (?, ?, ?)",
    [nombre, contrasena, correo] 
  );
  return rows.insertId; 
}

async function entrar(contrasena, correo) {
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE correo = ? AND contrasena= ?", [
    correo,contrasena]
    );
    if(rows.length==0){
        return null;
    }
    persona ={
        id:rows[0].id,
        nombre:rows[0].nombre,
        correo:rows[0].correo,
    }
    return persona;

}

async function buscar(id) {
    const [rows]= await pool.query("SELECT * FROM usuarios WHERE id = ?",[id]);
    if(rows.length==0){
        return null;
    }
    const persona={
        id:rows[0].id,
        nombre:rows[0].nombre,
        correo: rows[0].correo,
    }

    return persona;

}

module.exports = {
  coincidencias,
  userNew,
  entrar,
  buscar
};