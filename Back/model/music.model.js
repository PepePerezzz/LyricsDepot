const pool = require("../db/conexion");


//crear 
async function subirMusica(titulo,artista,albun,fecha,letra){
    const [row]= await pool.query("INSERT INTO canciones (titulo, artista, albun, fecha, letra, likes) VALUES (?, ?, ?, ?, ?, ?)",[titulo,artista,albun,fecha,letra,0]);

    return row.insertId;//solo el ID
}

//buscador
async function consultarMusica(titulo) {
    const [row]= await pool.query("SELECT id, titulo, artista FROM canciones WHERE titulo= ?", [titulo]
    );
    

    return row;//regresa todas las canciones con un mismo titulo solo titulo y artista
    
}

//especifica
async function  consultarCancion(id) {
    const [row]= await pool.query("SELECT * FROM canciones WHERE id= ?",[id]);
    return row[0];//solo una cancion
}

//modificar
async function modificarCancion(id, titulo, artista, albun, fecha, letra) {
    const [row]= await pool.query("UPDATE canciones SET titulo = ?, artista = ?, albun = ?, fecha = ?, letra = ? WHERE id = ?",[titulo, artista, albun, fecha, letra, id])

    return row.affectedRows;// si se actualizo manda 1 si no encontro ese id 0
}


//borrar
async function borrarCancion(id) {
    const [row]= await pool.query("DELETE FROM canciones WHERE id = ?",[id]);

    return row.affectedRows;// si se actualizo manda 1 si no encontro ese id 0
}

//like
async function like(id) {
    const [row] = await pool.query(
        "UPDATE canciones SET likes = likes + 1 WHERE id = ?",
        [id]
    );

    return row.affectedRows;
}

async function coincidencias(titulo,artista) {
    const [row]= await pool.query("SELECT id, titulo, artista FROM canciones WHERE titulo= ? AND artista = ?", [titulo,artista]
    );
    

    return row;//regresa todas las canciones con un mismo titulo solo titulo y artista
    
}


module.exports={
    subirMusica,
    consultarMusica,
    consultarCancion,
    modificarCancion,
    borrarCancion,
    like,
    coincidencias

}