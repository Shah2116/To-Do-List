const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){

    var today = new Date();

    var options = {
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    }
  
    var day = today.toLocaleDateString("en-US", options);
    
   
    res.render("list", {kindofDay:day});
    
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});

