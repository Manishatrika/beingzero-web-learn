const express = require('express');

const app = express();


app.get('/', function(req, res){
    res.sendFile(__dirname+"/frontend/index.html");
})
app.get('/login', function(req, res){
    res.send("This is Login");
})
var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("running on http://localhost:"+port);
})
