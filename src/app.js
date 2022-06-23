"use strict"

const express = require('express')

const app = express()
 
const { server } = require("./server")
server.applyMiddleware({
    app,
    cors: true
})


if(require.main === module) {
    app.listen(4000, () => {console.log("Server running"
        )})
}
module.exports = {
    app
   
}