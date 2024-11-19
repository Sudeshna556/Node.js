// connect our project to the database
// In order to connect to our library we need a npm library called mongoose.

const mongoose = require("mongoose");


//mongoose.connect("mongodb+srv://SudeshnaDas:*****@cluster-1.rd00r.mongodb.net/") //wrap it into async await function

const connectDB = async () => { //Declares the connect function as asynchronous, allowing the use of await inside it.
await mongoose.connect(
    "mongodb+srv://SudeshnaDas:Fd5lwmMfJ9AfX38m@cluster-1.rd00r.mongodb.net/"
);
}; //  await mongoose.connect(...) is used to wait for the connection to the MongoDB database to be established before moving on to the next line of code. This makes the code easier to read and write compared to using .then() and .catch() for handling promises.

module.exports = connectDB; // export connectDB 

/* 
The function will return a promise, and you can use await within it to pause the execution of the function until a promise is resolved
The await keyword is used to pause the execution of the async function until the promise is resolved.
*/
// connectDB() //returns a promise and it represents an asynchronous operation to connect to a database
//  .then(() =>{ //takes a callback fn which will be executed if the promise is resolved
//     console.log("database connection established..") 
// })
//  .catch((error) =>{ //takes a callback fn which will be executed if the promise is resolved
//     console.error("database cannot be connected !!")
//  });
