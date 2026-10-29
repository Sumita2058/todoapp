require ("dotenv").config()
const express = require("express")
const userRoutes = require("./routes/UserRouter")
const connectDB = require("./config/db")
const todomodel = require("./routes/TodoRouter")
const cors = require("cors")
const app = express()
connectDB()
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())
 app.use("/auth", userRoutes);
 app.use("/todos", todomodel)
 
app.listen(5000, ()=>{
    console.log("server is running in port 5000")
})
