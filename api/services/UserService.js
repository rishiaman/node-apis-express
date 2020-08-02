const axios = require('axios');
const User = require('../models/user');
const mongoose = require('mongoose');

async function getAddresByPincode(pincode) {

    let res = await axios.get('https://api.postalpincode.in/pincode/' + pincode);
    if (res) {
        const addressObject = {
            postOfficeName: res.data[0].PostOffice[0].Name,
            country: res.data[0].PostOffice[0].Country,
            district: res.data[0].PostOffice[0].District,
            state: res.data[0].PostOffice[0].State,
            pincode: res.data[0].PostOffice[0].Pincode,
        };
        return addressObject;
    } else {
        throw err;
    }
}

async function saveNewUser(name, pincode, age) {
    const addressObj = await getAddresByPincode(pincode);
    console.log(addressObj)
    const dataToSaveObject = new User({
        _id: mongoose.Types.ObjectId(),
        userName: name,
        age: age,
        district: addressObj.district,
        state: addressObj.state,
        country: addressObj.country,
        postOfficeName: addressObj.postOfficeName,
        pincode:addressObj.pincode,
    });
    const result = await dataToSaveObject.save();
    console.log(result);
    return result;
}


const userService = {
    saveNewUser,
    getAddresByPincode
}
module.exports = userService;