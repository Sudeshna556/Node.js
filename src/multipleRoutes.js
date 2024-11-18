const express = require("express"); //import

const app = express(); //object

// handlers 

app.use("/user",(req,res,next) => {
    console.log("hello!!"); 
    //res.send("1st response") //? it will show the 1st response
    //! if we want to print the next handler to the console then express has "next()" method
    next()
},
// passing multiple handlers
(req,res) =>{
    res.send("2nd response")
    console.log("hello2") 
},
 
(req,res,next) =>{
   // res.send("3rd response")
    console.log("hello2")
    next()
}, // it wont print the next one b/c in 2nd handler there is no next() to call the 3rd one so the response cant be sent to the cline in the 3rd case

(req,res,next) =>{
    res.send("3rd response")
    console.log("hello2")
    next()
}

// (req,res,next) =>{
//    
//     console.log("hello2") 
//    
// } this will go into an infinite loop


)



app.listen(3000,() => {
    console.log("server is successfully initiated at the port 3000..")
})



