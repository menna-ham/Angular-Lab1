const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const port=4000;

const app =express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    res.send("Hello from node server");
});

app.listen(port,function(){
    console.log("Server Running",port);
})

app.post('/register',function(req,res){
    console.log(req.body);
    res.status(200).send({"data":"Registered successfully"})
  })