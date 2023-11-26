const mongoose = require('mongoose')


const bikeSchema = new mongoose.Schema({
    manufactor:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    km:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    sname:{
        type:String,
        required:true
    },
    smobile:{
        type:String,
        required:true
    },
    splace:{
        type:String,
        required:true
    },
    bikeimage:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const bikes = mongoose.model('bikes',bikeSchema)

module.exports = bikes