//to load .env file
require('dotenv').config()
// import express
const express = require('express')
// import cors
const cors = require('cors')

// import router
const router = require('./Routes/routes')

// import db
require('./DB/connection')

// to create express server
const xgserver = express()



xgserver.use(cors())
// parse json data using server app
xgserver.use(express.json())

// use router
xgserver.use(router)
// customise port for server app
const PORT = 4000 || process.env.PORT

xgserver.use('/uploads',express.static('./uploads'))

// to run server app
xgserver.listen(PORT,()=>{
    console.log(`Xgarage server started at port ${PORT} `);
})



