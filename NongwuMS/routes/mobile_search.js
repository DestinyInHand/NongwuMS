var express = require('express');
var router = express.Router();
var sql = require('./sql');


router.get('/',function(req,res,next){
	var tag = req.query.tag;
	var key = req.query.key;

	// sql.connect();
	sql.globalSearch(tag,key,function(err,results){
		if(err){
			console.log("----- 9***** -----");
			console.log("error:"+err.message);
			return;
		}
		// for (var i = results.length - 1; i >= 0; i--) {
			
		// 	results[i].content = "";
		// 	console.log("---title---"+results[i].title);
		// }

		var ret = {'value':results,'status':'success'};
		// console.log("results--------")
		// console.log("---value----"+results);
		res.send(ret);
		// sql.end();
	});
});

router.get('/history',function(req,res,next){
	// sql.connect();
	sql.selectFromHistory(function(err,results){
		if(err){
			// console.log("----- 9***** -----");
			// console.log("error:"+err.message);
			return;
		}
		res.send({value:results});
		// sql.end();
	});

});

module.exports = router;