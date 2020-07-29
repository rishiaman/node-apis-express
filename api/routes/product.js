const express = require('express');
const router = express.Router();

router.get('/:productId',(req,res)=>{
    if(req.params.productId==='hi'){
        res.status(200).json({
            value:req.params.productId
        })
    }else{
        res.status(404).json({
            message:'NOT FOUND'
        })
    }
})

router.post('/course/save', (req,res)=>{
courseService.saveNewlyAddedCourse(req.body)
})

router.patch('/update', (req,res)=>{
    res.status(201).json({
       message:'It is a patch method'
    });
})


module.exports = router;