import mongoose from "mongoose";

const artistaSchema = new mongoose.Schema({
    id : {type: mongoose.Schema.Types.ObjectId},
    nome : {type:String, required:true}

})


const artista = mongoose.model('Artistas', artistaSchema)

export default artista




