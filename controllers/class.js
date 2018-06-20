var Class = require('../models/class');

exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');

};

exports.class_details_create = function (req, res, next) {
	var classl = new Class(
	{
		class_name: req.body.class_name,
		sections: req.body.sections
	});

	classl.save(function(err, obj){
		if(err) {
			var api_res = {
				msg: 'There occurred some error',
				err: err
			}
			return res.status(500).send(api_res);
		}
		var api_res = {
			msg: 'Class is Created successfully',
			data: obj
		}
		res.status(201).send(api_res);

	})
};

exports.class_list = function(req, res) {
	Class.find(req.query, function (err, classl){



		console.log('req.query');
	    console.log(req.query);
	  
	    console.log('req.params');
	    console.log(req.params);
	  

		if(err) return next(err);
		if(classl) {
			var api_res ={
				msg: 'Classes are with this information',
				data: classl
				
			}
			return res.status(500).send(api_res);

				var api_res= {
					msg: 'Classes are not there with this information'
				
			}
		}
		res.send(api_res);

	})
};

exports.class_details = function(req, res) {
	Class.findById(req.params.id, function (err, classl){
		if(err) return next(err);
		if (classl) {
			var api_res = {
				msg: 'All Good',
				data: classl
			}
			var status = 200;
		} else {
			var api_res = {
				msg: 'Class is Not Found with this ID'
			}
			var status = 404;
		}
		res.status(status).send(api_res);

	})
};


exports.class_details_update = function(req, res) {
	Class.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, classl) {
			if(err)
			{
				return next(err);
			} 
			else {
				var api_res = {

			         msg: 'Class Updated details',
					 data: req.body	
				}  
			}
			res.status(200).send(api_res);
		})
};

 exports.class_details_delete = function (req, res) {
 	Class.findByIdAndRemove(req.params.id, function (err, classl)
 	{ 
 		if(err)
 		{
 		 return next(err)
 		 res.status(404);
 		}
 	    else {
 	    	var api_res = {
 	    		msg: 'Class_details is Deleted and Deleted details is given below:',
 	    		data: classl
 	    	}
 	    }
 		res.status(200).send(api_res);

 	})
 };

