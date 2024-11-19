const express = require ("express") // import express module
const connectDB = require("./config/database");
const app = express(); //create an instance of an Express application,this isntace stored in the app object that represents your web application

connectDB() //returns a promise and it represents an asynchronous operation to connect to a database
 .then(() =>{ //takes a callback fn which will be executed if the promise is resolved
    console.log("database connection established..");
    app.listen(3000, () => {
        console.log("server is successfully initiated on the port number 3000..");
    });
})
 .catch((error) =>{ //takes a callback fn which will be executed if the promise is resolved
    console.error("database cannot be connected !!")
 });
