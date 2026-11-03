
const mongoose = require("mongoose")
const connectDB = async ()=>{
    try{
   await mongoose.connect("mongodb+srv://raisumita356_db_user:sumitarai@cluster0.xqbg9tl.mongodb.net//trainingNodejs")
   console.log("mongodb connect successfully")
    }
    catch(error){
console.log("Mongodb connected error",error.message)
    }
}
module.exports = connectDB