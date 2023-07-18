const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine',"ejs");


let itemList = [];
let works = [];

app.get("/",(req,res)=>{
    let day = date();
    // let day = date.getDate(); if multiple values were exported
    res.render("index",{listTitle : day,items : itemList});
});
app.post("/",(req,res)=>{
    let item = req.body.newItem;
    let title = req.body.list;
    // console.log(req.body)
    if(title === "Work"){
        works.push(item);
        console.log(works + "and "+item)
        res.redirect("/work");
    }else{
    itemList.push(item);
    res.redirect("/");
    }
});

app.get("/work",(req,res)=>{
    res.render("index",{listTitle:"Work List",items : works});
    // console.log(works);
});

// app.post("/work",(req,res)=>{
//     let item = req.body.newItem;
//     works.push(item);
//     res.redirect("/work");
// });

app.listen(process.env.PORT || 3000,()=>{
    console.log("server started at port 3000");
});
