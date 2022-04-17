var express =require('express');
var app=express();

app.get('/test',function(req,res){
   console.log(req.url);
   res.send("response from /test");

})


var port=3000;
app.listen(port);