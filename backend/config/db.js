
const mongoose = require("mongoose")
const connectDB = async ()=>{
    try{
   await mongoose.connect("mongodb://localhost:27017/trainingNodejs")
   console.log("mongodb connect successfully")
    }
    catch(error){
console.log("Mongodb connected error",error.message)
    }
}
module.exports = connectDB