var crypto = require('crypto');
var mongoose = require('mongoose');
var merges = require('./merges.js');
mongoose.connect('mongodb://localhost/blog');


function car(){
	this.name=String;
	this.password=String;
	this.email=String;
	this.head=String;
	this.time=Date;
	this.old =Number;
}

var car_Schema = new mongoose.Schema(new car(),{collection:'cars'}) ;
var car_Model = mongoose.model('cars',car_Schema);
var export_car = merges.create(car,car_Model);
module.exports = export_car;


var req = {
	query:{
		head:'http://www.baidu.com'
	},
	param:{
		password:'passw0rd',
		old:17
	},	
	body:{
		
		email:'892323@qq.com',
		name:'andel',
		time:'2014-12-1'
	}
}

var car = merges.copy(req,export_car);
// export_car.find(null,function(err,docs){
// 	console.log(docs);
// });

var query = {
	name:'shitailong'
}

export_car.findOne({
	"old":{"$gt":10}
},function(err,doc){
	console.log(err,doc);
});





