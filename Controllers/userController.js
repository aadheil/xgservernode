// import user model
const users = require('../Models/userSchema')


// register
exports.register = async(req,res)=>{
    console.log("Inside Register functions");
    const {username,mobile,email,password} = req.body
    console.log(`${username},${mobile},${email},${password}`);
    try{
    // check already existing user
    const existingUser = await users.findOne({email})
    if(existingUser){
     res.status(406).json("User Already Exists... Please Login!!!")
    }
    else{
     // register
     const newUser = new users({
         username,mobile,email,password
     })
     await newUser.save()
     res.status(200).json(newUser)

 }
    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)
    }
}

exports.login = async(req,res)=>{
    const{email,password}=req.body
    try{
        const existinguser=await users.findOne({email,password})
    if(existinguser){
        res.status(200).json(existinguser)
    }
    else{
        res.status(404).json("Invalid email or password")

    }
    }catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)

    }
}