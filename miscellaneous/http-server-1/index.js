const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("hello world, get route");
})

app.post("/", (req,res)=>{

    console.log(req.headers.auth);
    console.log(req.body);
    console.log(req.query);
    res.send("hello poste route world");
})


app.listen(port, ()=>{
    console.log(`server is runnig on port ${port}`);
})