const express = require('express')
const bcrypt = require('bcrypt')



const app = express()
app.use(express.json())



const users = []

app.post('/register' , async (req,res) => {
    const {username , password} = req.body ;
    try {
        const hashpassword = await bcrypt.hash(password, 10);
        users.push({
            username : username,
            password : hashpassword
        })
        res.status(201).json({message: 'User registered successfully'})

    }
    catch(error) {
        res.status(500).json({message: 'Error registering user'})
    }
})



app.post('/login' , async (req,res) => {
    const {username , password} = req.body ;
    try {
        const user = users.find(user => user.username === username)
        if(!user) {
            return res.status(400).json({message: 'User not found'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({message: 'Invalid credentials'})
        }
        res.status(200).json({message: 'Login successful'})
    }catch(error) {
        res.status(500).json({message: 'Error logging in'})
    }

})

const port = 3000;
app.listen (port , () => {
    console.log(`server is running on port : ${port}`)
})



