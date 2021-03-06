var express = require('express');
var router = express.Router();
var sql = require('./sql');

/** 乡镇列表*/
router.get('/',function(req,res,next){

	//登录验证
	if(!req.session.username){
		res.render('fail', {title: "您的账号已过期", message : "请重新登录"});
		return;
	}
	//数据维护人员验证
    if(req.session.typeid != 0){
    	res.render('fail', {title: "权限错误", message : "数据维护人员暂时没有权限"});
		return;
    }

	// sql.connect();
	sql.adminRegionSelectAllList(function(err, results){
		if(err){
			res.render('fail', {title: "查询乡镇失败", message : "数据库出现错误"});
			return;
		}

		var bigs = [];

		for(var line in results){
			var obj = results[line];
			if(obj["super"] == 0){
				bigs.push(obj);
			}
		}

		for (var i = 0; i < bigs.length; i++) {
			bigs[i]["subs"] = [];
		};

		for(var line in results){
			var obj = results[line];
            if(obj["super"] != 0){
            	var superID = obj['super'];
            	for (var i = 0; i < bigs.length; i++) {
            		if(bigs[i]['id'] == superID){
            			bigs[i]['subs'].push(obj);
            			break;
            		}
            	};
            }
		}
		
		res.render('magcountry', {countries: bigs, isSuperAdmin: !req.session.typeid, username: req.session.username});
		// sql.end();
	});

});


/** 添加*/
router.get('/add',function(req,res,next){
	//登录验证
	if(!req.session.username){
		res.render('fail', {title: "您的账号已过期", message : "请重新登录"});
		return;
	}
	//数据维护人员验证
    if(req.session.typeid != 0){
    	res.render('fail', {title: "权限错误", message : "数据维护人员暂时没有权限"});
		return;
    }

	var name = req.query.name;
	var superID = req.query.super;
	var info = [];
	info.name = name.trim();
	info.superID = superID;
	if(info.name==""){
		res.send("<script> alert('乡镇名不能为空'); window.location.href='/admin_region' </script>")
		return;
	}

	sql.selectFromRegionByName(info,function(err,results){
		if(err){
			console.log(err.message);
			return;
		}
		if(results.length!=0){
			// res.render('fail', {title: "添加村庄失败", message : "乡镇或村庄已存在"});
			res.send("<script> alert('乡镇或村庄已存在'); window.location.href='/admin_region' </script>")
			return;
		}

		if(info.superID){
		//添加村庄
			sql.adminRegionAddSmall(info.name, info.superID, function(err){
				if(err){
					res.render('fail', {title: "添加村庄失败", message : "数据库出现错误" + err});
					return;
				}
				res.redirect("/admin_region/");
				// sql.end();
			});

		}else{
			//添加乡镇
			
			sql.adminRegionAddBig(info.name, function(err){
				if(err){
					res.render('fail', {title: "添加乡镇失败", message : "数据库出现错误"});
					return;
				}
				res.redirect("/admin_region/");
				// sql.end();
			});
		}

	});
	// sql.connect();
	
});


/** 删除*/
router.get('/delete',function(req,res,next){
	//登录验证
	if(!req.session.username){
		res.render('fail', {title: "您的账号已过期", message : "请重新登录"});
		return;
	}
	//数据维护人员验证
    if(req.session.typeid != 0){
    	res.render('fail', {title: "权限错误", message : "数据维护人员暂时没有权限"});
		return;
    }

    var id = req.query.id;
    // sql.connect();
    sql.adminRegionDeleteOne(id, function(err, results){
    	if(err){
    		res.render('fail', {title: "删除失败", message : "数据库出现错误"});
			return;
    	}

    	//跳转到主页面
		res.redirect("/admin_region/");
		// sql.end();
    });
});

/** 修改*/
router.post('/modify',function(req,res,next){
	if(!req.session.username){
		res.render('fail', {title: "您的账号已过期", message : "请重新登录"});
		return;
	}
	//数据维护人员验证
    if(req.session.typeid != 0){
    	res.render('fail', {title: "权限错误", message : "数据维护人员暂时没有权限"});
		return;
    }
    // var id = req.body.id;
    var name = req.body.name;
    var info = [];
    info.id = req.body.id;
    info.superID = req.body.superID;
    info.name = name.trim();
    // console.log("id="+id+"--name="+name);
    // var superid = req.body.superid;
    sql.selectFromRegionByName(info,function(err,results){
		if(err){
			console.log(err.message);
			return;
		}
		if(results.length!=0){
			// res.render('fail', {title: "添加村庄失败", message : "乡镇或村庄已存在"});
			res.send("<script> alert('乡镇或村庄已存在,请重新命名'); window.location.href='/admin_region' </script>")
			return;
		}

		sql.adminRegionModifyOne(info.id,info.name,function(err,results){
	    	if(err){
				console.log("---"+err.message);
				return;
			}
			res.redirect("/admin_region/");
	    });
	
	});

    
})
//  /admin_region/modify
module.exports = router;