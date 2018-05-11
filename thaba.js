const express = require('express');
var app = express();


// routing for default 

app.get('/', (req,res) => {
res.send('Hello...');
})

// static files

app.use(express.static('public'));



app.listen(3000,() => {
    console.log("App is running on port 3000 ...");
})