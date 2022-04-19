import mongoose from "mongoose";


const personeSchema = new mongoose.Schema({
    name : { type : 'string', required : true},
    age : {type : 'number'},
    favoritfood : [string]

 })

 const persone = mongoose.model('persone', personeSchema);


 export default persone