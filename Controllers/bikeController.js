const bikes = require('../Models/bikeSchema')


// addbike
exports.addbike = async(req,res)=>{
    console.log("Inside addbike functions");
    const {manufactor,model,year,km,overview,sname,smobile,splace,userId}=req.body
    const bikeimage=req.file.filename
    console.log(`${manufactor},${model}`);

   
    try{
    
     // add
     const newBike = new bikes({
        manufactor,model,year,km,overview,sname,smobile,splace,bikeimage,userId
     })
     await newBike.save()
     res.status(200).json(newBike)

 
    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)
    }
}


exports.getbikes = async(req,res)=>{
    try{
        const allusers=await bikes.find()
        res.status(200).json(allusers)

    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)

    }
}