const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product')


router.get('/:productId',(req,res)=>{
    if(req.params.productId){
        res.status(200).json({
            value:req.params.productId,
            message:'Found'
        })
    }else{
        res.status(404).json({
            message:'NOT FOUND'
        })
    }
})

router.post('/product/save', (req,res)=>{
    const product = new Product({
        _id:mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price,
    });
    product.save().then(res=>{
        console.log(res);
    })
res.status(201).json({
    createdProduct:product,
})
})

router.patch('/update', (req,res)=>{
    res.status(201).json({
       message:'It is a patch method'
    });
})


module.exports = router;