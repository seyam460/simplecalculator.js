const express = require('express')
const multer = require('multer')
const app = express()
app.use(express.json())
const port = 3000


// file upload
const storage = multer.diskStorage({
    destination: 'upload/',
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`
        cb(null, filename)
    }
})

const upload = multer({storage:storage})

const express = require('express')
const multer = require('multer')
const app = express()
app.use(express.json())
const port = 3000


// file upload
const storage = multer.diskStorage({
    destination: 'upload/',
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`
        cb(null, filename)
    }
})

const upload = multer({storage:storage})


app.post('/upload' , upload.single('photo') , (req,res) => {
    console.log(req.file)
    res.json({
        messsage : 'file uploaded successfully'
    })
})

app.listen(3000, () => {
    console.log(`server started on port 3000 ${port}`)
})

