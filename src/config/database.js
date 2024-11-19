

const mongoose = require("mongoose");


//mongoose.connect("mongodb+srv://SudeshnaDas:*****@cluster-1.rd00r.mongodb.net/") //wrap it into async await function

const connectDB = async () => { //Declares the connect function as asynchronous, allowing the use of await inside it.
await mongoose.connect(
    "mongodb+srv://SudeshnaDas:Fd5lwmMfJ9AfX38m@cluster-1.rd00r.mongodb.net/"
);
}; 

module.exports = connectDB; // export connectDB 


