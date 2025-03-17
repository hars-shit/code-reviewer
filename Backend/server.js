const app=require("./src/app.js")
const env=require('dotenv')

env.config()

const PORT=3000
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})