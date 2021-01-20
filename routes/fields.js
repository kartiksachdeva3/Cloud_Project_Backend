const express = require('express');

const router = express.Router()

const Fields = require('../models/fields');


router.get('/', async (req,res)=>{
  try{
    const fields = await Fields.find({})
    res.json(fields);
  }
  catch(err){
    console.error(err);
    res.json('Error: ' + err);
  }
});

router.put('/', async (req,res)=>{
  try{
    //todo
    console.log(req.body);
    res.json('check console');
  }
  catch(err){
    console.error(err);
    res.json('Error: ' + err);
  }
});

//todo router.delete
//todo router.update


module.exports = router;


