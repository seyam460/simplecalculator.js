const express = require('express')
const crypto = require('crypto')



const app = express()
app.use(express.json())



const algorithom = 'aes-256-cbc'
const secretkey = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

function encrypt(text) {
    const cipher = crypto.createcipheriv(algorithom, secretkey, iv);;
    let encrypted = cipher.update(text , 'utf' , 'hex')
    encrypted += cipher.final('hex')
    return {
        iv : iv.toString('hex'),
        content: encrypted
    }
}


function decrypt(text) {
    const decipher = crypto.createDecipheriv(algorithom , secretkey, Buffer.from(encrypted.iv, 'hex'))
    let decrypted = dechiper.update(encrypted.content , 'utf8' , 'hex')
    decrypted += dechiper.final('utf8')
    return decrypted 
}





app.post('/encrypt' , (req,res) => {
    const {text} = req.body ;
    const encrypted = encrypt(text)
    res.json(encrypted)
})



app.post('/decrypt' , (req,res) => {
    const {encryptedData} = req.body ;
    const decrypted = decrypt(encryptedData)
    res.json(decrypted)
})


const port = 3000;
app.listen (port , () => {
    console.log(`server is running on port : ${port}`)
})

