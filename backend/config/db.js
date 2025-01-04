import mongoose from "mongoose";

export const connectDB = async ()=>{

  await mongoose.connect("mongodb+srv://JugalVyas18:Jugalvyas2109@cluster0.feq4b.mongodb.net/bite-bliss").then(()=>{
    console.log("DB Connection Established");
  })

}