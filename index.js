const express = require('express')
const multer = require('multer')
const app = express()
app.use(express.json())
const port = 3000


// application middleware
app.use((req,res,next) =>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next()
})



// file upload
const storage = multer.diskStorage({
    destination: 'upload/',
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`
        cb(null, filename)
    }
})

const upload = multer({storage:storage})


// route middleware 

const authmiddleware = (req, res, next) => {
    const token = req.headers['authorization']
    if (token == 'password123') {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}






app.get('/' , (req,res) => {
    console.log(req.headers)
    console.log("token:" , req.headers['token'])
    const token = req.headers['token'];
    const userAgent = req.headers['user-agent']
    res.send(`Token is: ${token} and User Agent is: ${userAgent}`)
})

app.get('/search', (req, res) => {
    console.log(req.method)
    console.log(req.url)
    console.log(req.query)
    const {name , category} = req.query;
    res.send(`${name} ---- ${category}`)
})


app.post('/submit' , (req, res) => {
    const data = req.body;
    console.log(data)
    res.send("Response")


})


app.post('/search', (req, res) => {
    const {keyword} = req.query;
    console.log(keyword)
    const data = req.body;
    console.log(data)
    const authtoken = req.headers['authorization']
    console.log(authtoken)
    res.status(201).json({
        status: 201,
        data : req.body
    })
})



app.post('/upload' , upload.single('photo') , (req,res) => {
    console.log(req.file)
    res.json({
        messsage : 'file uploaded successfully'
    })
})

app.listen(3000, () => {
    console.log(`server started on port 3000 ${port}`)
})


// serach mark er pore jhde question mark thake taile oita e query and query 2 ta part thake ekta hocche 1) key 2)value ,,, name and category pathano hoii

// parameter : usually code pathai...