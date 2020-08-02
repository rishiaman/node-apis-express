const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');



router.post('/user/new/save', async (req, res) => {
    console.log(req.body);
    const message = await userService.saveNewUser(req.body.name, req.body.pincode,req.body.age);
    if (message) {
        res.status(201).json({
            createdUser: message,
        })
    }else{
        res.status(500).json({
            message:'internal server error'
        })
    }
})

module.exports = router;