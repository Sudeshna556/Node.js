# npm init to set the configuration file for our project

## create source folder and file and check if itis running or not : command is, node foldername/filename

## install express in our project : command is, npm install express or npm i express . Running this command 2 things will be added to our project which is one node_modues and another one is package_lock jason

## Express Framework: Express  is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It is widely used for building RESTful APIs and web applications and Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls

 /*
    const app = express()
 Creating an Application Instance: The express() function is a top-level function exported by the Express module. When you call express(), it creates an instance of an Express application. This instance, stored in the app variable, is an object that represents your web application.
The app object is used to configure your application. You can define routes, middleware, and settings using this object.

*/

/*
    app.listen(3000)
//it starts the server, listen is a menthod which is used to bind and listen for connections on the specified host and post,in this case 3000 is the port number
port no. - the port number on which our server will listen for incoming requests. port 3000 is mainly used for developement purposes, when we run our application, it navigates to <http://localhost:3000> in our web browser.
*/

/*
app.use((req,res)=>{ //app.use method in express is used to mount the middleware functions, Middleware functions have access to the request object (req), the response object (res)
    res.send("hello from the server");
})
middleware functions : Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function.

*/
