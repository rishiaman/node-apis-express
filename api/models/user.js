const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    userName:String,
    age:Number,
    district:String,
    state:String,
    country:String,
    postOfficeName:String,
    pincode:Number,
})

module.exports = mongoose.model('User', userSchema);