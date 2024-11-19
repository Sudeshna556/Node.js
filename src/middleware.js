const express = require("express");

const app = express(); 

app.use("/admin", (req,res) => {
    console.log("admin auth is getting checked!!");
    const token = "xyz";
    const isAdminAuthrized = token === "xyz";
    if(!isAdminAuthrized){
        res.status(401).send("Unauthorized request")
    }else{
        next();
    }
})

app.get("/admin/getAllData", (res,req) => {
    res.send("All Data Sent");
})

app.listen(3000,() => {
    console.log("connected")
})