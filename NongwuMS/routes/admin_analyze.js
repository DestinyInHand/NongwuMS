var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	if(!req.session.username){
		res.render('fail', {title: "您的账号已过期", message : "请重新登录"});
		return;
	}
	//数据维护人员验证
    if(req.session.typeid != 0){
    	res.render('fail', {title: "权限错误", message : "数据维护人员暂时没有权限"});
		return;
    }
	res.render('admin_analyze',{status : "none",isSuperAdmin: !req.session.typeid, username: req.session.username});
});

module.exports = router;