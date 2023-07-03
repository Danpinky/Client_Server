const express = require('express');

const SchoolORM = require('../models/schoolORM');

const router = express.Router();


router.get('/', async(req, res, next) =>  {


    const getSchool = await SchoolORM.findAll()
  
    return res.render('school',{school:getSchool})
  
  });
  
module.exports = router