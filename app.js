var express =require('express');
var app=express();

app.get('/test',function(req,res){
   console.log(req.url);
   res.send("response from '/test'");

})


var port=3000;
app.listen(port,function(err){
    var line='------------------------------------------';
    console.log(line);
    if(err){
        console.log(err);
    }
    else{
        console.log("node.js Website is listening; Port:" + port);
    }
    console.log(line);
} );