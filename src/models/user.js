const mongoose = require("mongoose")

// 1. create a user schema
//# A schema in Mongoose(mongoose.schema) is used to define the structure of documents within a collection, including the fields and their data types.
const userSchema = new mongoose.Schema({ 
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
  
    email : {
        type : String
    },
    password:{
        type: String
    },
    gender : {
        type : String
    },
    country : {
        type : String
    }

})

//2. create a model of that schema

const User = mongoose.model("User", userSchema);
/*
 * mongoose.model() is a method provided by Mongoose to create a model.and this model will create its own instances (multiple users)
 * A model in Mongoose is a class that represents a collection in the MongoDB database. the model provides us to perform 
   all kind of queries.

 * user is the name of the model, Mongoose will use this name to create the collection in the database. By default, Mongoose will pluralize
    this name to form the collection name. So, in this case, the collection will be named "users".

 * created model is now assigned to User by which we can interact with the users collection

 */

module.exports = User;

