// s = 'ssss';
// r = s.substring(0,2);
// console.log(s);
// console.log(r);
// var nodejieba = require("nodejieba");
// var result = nodejieba.cut("八百标兵奔北坡");
// console.log(result);
// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('mysql://root:123456@127.0.0.1:3306/pinyuan');
// sequelize
// .authenticate()
// .then(function(err) {
// console.log('Connection has been established successfully.');
// })
// .catch(function (err) {
// console.log('Unable to connect to the database:', err);
// });

// var category = sequelize.define('category',
// 	{
// 		id:{
// 			type:Sequelize.BIGINT(11),
// 			primaryKey: true 
// 		},
// 		type:{
// 			type:Sequelize.STRING(50)
// 		}
// 	},
	
// 	{
// 		timestamps:false,
// 		freezeTableName:true
// 	}
// );
// var seqModel = require('./routes/seqModel')
// var category = require('./routes/seqModel').category; 
// category.findAll({
	
// 	where:{
// 		id:1
// 	}

// })
// .then(function(result){
// 	// console.log(result[0]);
// 	// console.log(result[0]['dataValues']['type']);
// 	console.log(result[0].get('type'));

// });
// category.findOne().then(function (user) {
//     console.log(category.get('id'));
// });


// var string = '<p>我的“空空“,“1”,"</p>'
// var string2 = "<p>我的‘嗯’，'嗯'</p>"
// var reg1 = /[“”"]/g;
// var reg2 = /[‘’']/g;
// s = string.replace(reg,"&quot;");
// console.log(string);
// console.log(s)
// console.log(string2.replace(reg2,"&apos;"));

// const domain = require('domain');
// var d = domain.create();


// d.on('error', function(err){
// 	// console.log(err.message);
// }) // [2]

// d.run(function () { // [3]
// 	try{
// 		var arr = new Array();
//   		console.log(arr[0].id);
// 	}catch(e){
// 		// console.log(e.message);
// 	}
//   	var i = 5;
//   	while(i){
//   		i--;
//   		console.log(",,,,")
//   	}
// })


// var domain = require('domain');
// var d = domain.create();
// var fs = require('fs');

// d.on('error', function(err) {
//   // console.error(err);
// });

// d.run(function() {
//   fs.readFile('somefile.txt', function (err, data) {
//     if (err) throw err;
//     console.log(data);
//   });
//   var i = 5;
// 	while(1){
		
// 		console.log(",,,,")
// 	}
// });
var word = '科技';
var phase = '科技部：杂交小麦示范推广成效明显'
console.log("index="+phase.indexOf(word));

