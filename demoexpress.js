const express = require('express');
const app = express();
const port = 3000;




app.all('/secret' , (req , res , next) => {
    console.log("someone is trying to hack my website");
    next();
});

app.get('/secret' , (req , res) => {
    res.send("wellcome to my page");
});

app.get('/' , (req , res) => {
    res.send("Root");
});

app.get('/about' , (req , res) => {
    res.send("baout");
});

app.get('/random.text' , (req , res) => {
    res.send('random.text');
});

// Route perameters 
app.get('/users/:userId/books/:bookId' , (req , res) => {
    res.send(req.params);
});

// Route handles 

app.get('/user/:id' , (req , res , next) => {
    if(req.params.id === '0') {
        return next('route');
    }
    res.send(`user ${req.params.id}`);
});

app.get('/user/:id' , (req , res) => {
    res.send('special handler for user id 0');
});

app.use('/user/:id' , (req , res , next) => {
    res.send('user');
});

// catching error 

app.get('/' , (req , res) => {
    throw new error ('BROKEN'); // express will catch this on its own
});

app.get('/' , (req , res , next) => {
    fs.readfile('/file-does-not-exist' , (err , data) => {
        if(err) {
            nest(err);
        }else {
            res.send(data);
        }
    })
});




app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
}) 