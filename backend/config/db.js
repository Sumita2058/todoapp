
const mongoose = require("mongoose")
const connectDB = async ()=>{
    try{
   await mongoose.connect("mongodb+srv://sumita:sumita123@cluster0.xqbg9tl.mongodb.net/mernproject")
   console.log("mongodb connect successfully")
    }
    catch(error){
console.log("Mongodb connected error",error.message)
    }
}
module.exports = connectDB