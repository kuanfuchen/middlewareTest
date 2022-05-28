const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsControllers')

/* GET users listing. */
router.get('/', (req, res) =>{
  postsController.getPosts(req,res)
});
router.post('/',(req, res, next)=>{
  console.log(req.body)
  postsController.createPost(req, res, next)
})
router.delete('/:id',(req,res,next)=>{
  postsController.deleteOnePosts(req,res,next)
});
router.delete('/',(req, res,next)=>{
  postsController.deleteManyPosts(req,res,next)
})
router.patch('/:id',(req, res, next)=>{
  postsController.updataPosts(req,res,next)
})
module.exports = router;
