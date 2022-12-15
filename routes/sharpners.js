const express = require ('express');

const router = express.Router();
const Sharpner = require('../models/sharpner');

router.get('/',async(req,res)=>{
    try{
        const sharpners =await Sharpner.find()
        res.json(sharpners)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const sharpners =await Sharpner.findById(req.params.id)
        res.json(sharpners)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.post('/',async(req,res) => {
    const sharpner = new Sharpner({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
{
    try{
        const a1 = await sharpner.save()
        res.json(a1)
    }catch(err){
        res.send('error');
    }
}
})

router.patch('/:id',async(req,res)=>{
    try{
        const sharpner = await Sharpner.findById(req.params.id)
        sharpner.sub = req.body.sub
        const a1 = await sharpner.save()
        res.json(a1)
    }catch(error){
       res.send('error')
    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const sharpner = await Sharpner.findById(req.params.id)
        sharpner.sub = req.body.sub
        const a1 = await sharpner.remove()
        res.json(a1)
    }catch(error){
       res.send('error')
    }
})

module.exports=router