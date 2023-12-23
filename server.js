const express = require("express");
const morgan = require("morgan")
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const router = require("./routes/userRoutes");

dotenv.config();

connectdb();

const app = express();


app.use(express.json())
app.use(morgan("dev"))

app.use("/api/v1/user",router)


const PORT = process.env.PORT || 8080;

app.listen(PORT , ()=>{
    console.log("app is runing in 8080");
})