const express = require("express");
const server = express();
server.use(express.json());



const AccountsRouter = require("./accounts/accounts-router");
server.use("/api/accounts", AccountsRouter);


server.get('/', (req, res) => { // Sanity check to connect to browser or HTTP client.
    res.status(200).json({
        status: 200,
        message: 'Connected to API',
        time: new Date().toLocaleString()
    })
})


server.use(errorHandling) // will trap "".catch/500 errors" happening above


module.exports = server;



// *catch all 500 errors middleware* 
// Now all .catch's will be handled by the error handling middleware
// All .catch/500 error's now look like this: .catch(next)
// You can also use .catch(err => next(err)) 
// connect this with server.use at the end of the pipeline

// Explanation:
// If there are 4 args in a global function, Express will automatically fire it when -
// nothing accepts the 'next()' in any given endpoint.
// This is the last line of defense by the server.

// this is to disable eslint error for the next line
// eslint-disable-next-line no-unused-vars  
function errorHandling(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message,
        status: 500
    })
}
