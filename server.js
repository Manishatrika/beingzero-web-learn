const express = require('express');

const app = express();


app.get('/', function(req, res){
    res.send("This is from Manisha");
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("running on http://localhost:"+port);
})
