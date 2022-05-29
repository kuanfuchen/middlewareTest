const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userControllers')

/* GET users listing. */
router.get('/', (req, res) =>{
  usersController.getUser(req,res)
});
router.post('/',(req,res,next )=>{
  usersController.createUsers(req,res, next)
})
router.delete('/:id',(req,res, next)=>{
  usersController.deleteOneUser(req,res, next)
});
router.delete('/',(req, res, next)=>{
  usersController.deleteManyUser(req,res, next)
})
router.patch('/:id',(req,res, next)=>{
  usersController.updataUser(req,res, next)
})
module.exports = router;
