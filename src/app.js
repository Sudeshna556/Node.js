const express = require ("express") // import express module

const app = express(); //create an instance of an Express application,this isntace stored in the app object that represents your web application

//?app.listen(3000) 
//it starts our server



// handle the port
app.use("/hello",(req,res)=>{ //app.use method in express is used to mount the middleware functions, here send method is the middlewarefn.
    res.send("hello from the server");//res.send method is used to send a response to the client
});

app.use("/test",(req,res)=>{ //app.use method in express is used to mount the middleware functions
    res.send("sending another response!!");

app.listen(3000, () => {
    console.log("server is successfully initiated on the port number 3000..");
});
