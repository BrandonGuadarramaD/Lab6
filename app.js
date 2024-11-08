const express = require('express')
const app = express();
const router = express.Router();

app.get('/',(req,res)=>  {
    res.json({message:'Sazke'});
})
 
const PORT = 8899;
app.listen(PORT,() =>  console.log("Server running on 8899"))