const express=require("express")
require("dotenv").config();
const aiRoutes=require("./routes/ai.routes")
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors(
   {
      origin: "*", // or specify a domain
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"]
   }
))


app.get('/',(req,res)=>{
   res.send('Hello World')
})

app.use("/ai",aiRoutes)

module.exports=app