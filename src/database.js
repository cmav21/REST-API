import MongoClient from "mongodb";

//Regresa cadena de conexion y exporta la funcion
export async function connect(){
    try{
        //Si la base de datos no existe la crea
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useNewUrlParser: true
        });
        const db = client.db('node-restapi');
        console.log("DB is connected");
        return db;
    } catch(e){
        console.log(e);
    }
}
