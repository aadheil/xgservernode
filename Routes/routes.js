// import express
const express = require('express')
// create router for express app using Router()
const router = new express.Router()
// import usercontroller js file
const usercontroller=require('../Controllers/userController')
const bikeController=require('../Controllers/bikeController')
const multerConfig = require('../Middlewares/multerMiddleware')

// define different routes for server app
// register
router.post('/register',usercontroller.register)

router.post('/login',usercontroller.login)

router.post('/addbike',multerConfig.single('bikeimage'),bikeController.addbike)

router.get('/allbikes',bikeController.getbikes)

// export router
module.exports = router