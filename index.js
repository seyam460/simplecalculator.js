const express = require('express')

const app = express()
const port = 3000

app.get("/" , (req,res)=> {
    res.send("Hello World ! rakib vhaiya ");
    req.end();
})

app.listen(port , () =>{
    console.log(`Server running successfully at: ${port}`)
})