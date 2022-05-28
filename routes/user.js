const express = require('express');
const router = express.Router();
const postsController = require('../controllers/userControllers')

/* GET users listing. */
router.get('/', (req, res) =>{
  postsController.getUser(req,res)
});
router.post('/',(req,res,next )=>{
  postsController.createUsers(req,res, next)
})
router.delete('/:id',(req,res, next)=>{
  postsController.deleteOneUser(req,res, next)
});
router.delete('/',(req, res, next)=>{
  postsController.deleteManyUser(req,res, next)
})
router.patch('/:id',(req,res, next)=>{
  postsController.updataUser(req,res, next)
})
module.exports = router;
