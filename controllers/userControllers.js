const User = require('../models/usersModel');
const handleSuccess = require('../severices/handleSuccess');
const handleErrorAsync = require('../severices/handleError');
const errorField = require('../severices/errorField');

const usersContrllers = {
  getUser: async(req, res)=>{
    const data = await User.find()
    handleSuccess(res, data)
  },
	createUsers: handleErrorAsync(async(req, res, next)=>{
		if(req.body.name && req.body.email){
			const data = {
				'name':req.body.name,
				'email':req.body.email,
				'photo':req.body.photo
			}
			const info = await User.create(data);
				handleSuccess(res,info)
		}else{
			errorField(405, '缺少name || email', next)
		}
	}),
	deleteOneUser: handleErrorAsync(async(req,res,next)=>{
		const id = req.params.id;
		const deleteMessage=await User.findByIdAndDelete(id);
		if(deleteMessage !== null){
			handleSuccess(res,'刪除user成功')
		}else{
			errorField(406, '重複刪除user', next)
		}
	}),
	deleteManyUser: handleErrorAsync(async(req,res,next)=>{
		if(req.originalUrl === '/users'){
			await User.deleteMany({});
      handleSuccess(res,[]);
		}else{
			errorField(406, '重複刪除users', next)
		}
	}),
	updataUser: handleErrorAsync(async(req,res,next)=>{
		const id = req.params.id;
		const info = req.body;
		if( id && info.name && info.email){
			const data = await User.findByIdAndUpdate(id,{
				'name':info.name,
				'email':info.email,
        'photo':info.photo
			},{new:true, runValidators: true})
				handleSuccess(res, data)
		}else{
      errorField(406, '缺少user必要資料無法更新', next)
    }
	})
}
module.exports = usersContrllers