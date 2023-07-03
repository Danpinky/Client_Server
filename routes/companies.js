const express = require('express');

const CompanyORM = require('../models/companyORM');

const router = express.Router();


router.get('/', async(req, res, next) =>  {


    const getCompany = await CompanyORM.findAll()
  
    return res.render('company',{company:getCompany})
  
  });
  
module.exports = router