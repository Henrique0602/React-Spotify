import mongoose from "mongoose";

export default async function conectDb(){
    mongoose.connect("mongodb+srv://henriquefbrigo:Rique0602@cluster0.rnl7i.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}