const express = require ("express") // import express module

const app = express(); //create an instance of an Express application,this isntace stored in the app object that represents your web application
//so app object is used to configure your application. You can define routes, middleware, and settings etc.

//?app.listen(3000) 
//it starts our server
// listen is a menthod which is used to bind and listen for connections on the specified host and post,in this case 3000 is the port number


// handle the port
app.use("/hello",(req,res)=>{ //app.use method in express is used to mount the middleware functions, here send method is the middlewarefn.
    res.send("hello from the server");//res.send method is used to send a response to the client
});

app.use("/test",(req,res)=>{ //app.use method in express is used to mount the middleware functions, here send method is the middlewarefn.
    res.send("this line is just trial and to show you how to pass files, for ex /test file");//res.send method is used to send a response to the client
});

app.listen(3000, () => {
    console.log("server is successfully initiated on the port number 3000..");
});
