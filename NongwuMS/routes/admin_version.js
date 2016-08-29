var express = require('express');
var router = express.Router();
var sql = require('./sql');
var formidable = require('formidable');
var fs = require('fs');
var AVATAR_UPLOAD_FOLDER = '/app/';
var path=require('path');
var	StringDecoder = require('string_decoder').StringDecoder;
var	EventEmitter = require('events').EventEmitter;
var	util=require('util');

/** 所有项目列表*/
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

	//获取最新版本号
    sql.adminVersionSelectLastestVersion(function(err, results){

    	if(err){
			res.render('fail', {title: "获取应用失败", message : "数据库出现错误"});
			return;
    	}

    	var version = {};
    	if(results.length > 0){
    		version = results[0];
    	}

    	res.render('AppVersion', {version:version, isSuperAdmin: !req.session.typeid, username: req.session.username});

    });

	
});

router.post('/', function(req, res, next){
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

    var form = new formidable.IncomingForm(); 
    form.path = __dirname + '/../public' + AVATAR_UPLOAD_FOLDER;
	
	// 上传配图
    form.parse(req,function(error,field,files){
    	if(error){
	    	res.render('fail', {title: "上传应用出错", message : "请稍后重新上传"});
			return;
	    }

	    var version = {};
	    version['version'] = field['version'];

		//图片存储与地址存储
		var extName = 'apk';  //后缀名
	    var newPath;		  //文件存储路径

	    if(files["file"]['size']!=0){
	    	avatarName = "pingyuan" + version['version'] + '.' + extName;
		    newPath= form.path + avatarName;
		    //重命名图片并同步到磁盘上
	    	fs.renameSync(files["file"]["path"], newPath);
	    	//访问路径
	    	newPath = AVATAR_UPLOAD_FOLDER + avatarName;

			version["savepath"] = newPath;
	    }else{
	    	version["savepath"] = "";
	    }

	    sql.adminVersionAddNewApp(version, function(err, results){
	    	if(err){
		    	res.render('fail', {title: "上传应用出错", message : "请稍后重新上传"});
				return;
		    }

	    	// res.redirect("/admin_version/");
	    	res.send("<script>alert('应用上传成功'); window.location.href='/admin_version'</script>");
	    });

    });

});

router.get('/lastestVersion', function(req, res, next){

	var version = "";
    sql.adminVersionSelectLastestVersion(function(err, results){
    	if(results.length != 0){
    		version = results[0]["version"];
    	}
    	res.send({version : version});
    });

});

router.get('/lastestVersionDownload', function(req, res, next){

 	var url = "#";
    sql.adminVersionSelectLastestVersion(function(err, results){
    	if(results.length != 0){
    		url = results[0]["savepath"];
    	}
    	res.send({url : url});
    });


});



module.exports = router;