import mongoose from "mongoose";
const server = "127.0.0.1:27017";
const database = "mongooseCheckpointeBd"


class Database{
    constructor(){
        this.__connect();
    }
    __connect(){
        mongoose.connect("mongodb://${server}/${database}")
        .then(
            () => {
                console.log('conexion a la bd avec succes')
            }
        )
        .catch(err => console.log(err))
    }
}

export default Database;