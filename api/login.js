var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'root',
	password : '',
    host :'localhost',
 });
 var CRUD = require('mysql-crud');
 exports.login = function(req, res) {
 	var name='shahzad housing asso';
 	var password='shahzad1234'; 
 	 	 	
 	  CRUD(db, 'tbl_housing_association').load({housing_ass_name : name,building_password : password }, function (err, val) {	
 
 	  	var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};
 	  	if(val.length>0){
 	  		resdata.status=true;
 	  		resdata.message='successfully login welcom to ..';
 	  		
 	  	}else{
 	  		resdata.status=false;
 	  		resdata.message='wrong user name or password ..please enter a valid one ';
 	  	}
 	  	  
 	  	res.jsonp(resdata);
 	  });
 	    
 }; 