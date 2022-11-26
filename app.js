const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended : true}));

app.get("/",(req,res,next)=>{
    res.send("<h1>Hello world!</h1>")
});

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})