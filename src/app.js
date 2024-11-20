const express = require ("express") // import express module
const connectDB = require("./config/database");
const app = express(); //create an instance of an Express application,this isntace stored in the app object that represents your web application
const User = require("./models/user")

//insert data into signup form , to add data into the database we use POST command

app.post ("/signup", async (req,res) => {
    const user = new User({ // i am creating a new user with the userObj data or we can say i am creating a new instance of user model
        firstName : "sudeshna",
        lastName: "Das",
        email : "sdas@email.com",
        password : "23678sdas"
       
    })

// to save the data into db
try{
    await user.save() // this fn is basically returns a promise
    res.send("user added successfully!!")
} catch(error){
    res.status(400).send ("There is an error saving the user!" + error.message)
}


});

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
