const express = require ("express") // import express module

const app = express();  


// handle the port
app.use("/hello",(req,res)=>{ 
    res.send("hello from the server");
});

app.get("/user",(req,res) =>{
    res.send({name : "sdas", id : "66557sdas"});

});

app.post("/user",(req,res) =>{
    res.send("saved to database!!");

});


app.delete("/user",(req,res) =>{
    res.send("deleted successfully!!");

});

app.use("/test",(req,res)=>{ 
    res.send("This is another response!!");
});

app.listen(3000, () => {
    console.log("server is successfully initiated on the port number 3000..");
});
