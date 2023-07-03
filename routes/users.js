var express = require('express');
const UserORM = require('../models/userORM');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req, res, next) =>  {


  const getUsers = await UserORM.findAll()

  return res.render('users',{users:getUsers})

});

module.exports = router;
