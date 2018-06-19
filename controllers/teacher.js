var Teacher = require('../models/teacher');

exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');

};

exports.teacher_details_create = function (req, res, next) {
	var teacher = new Teacher(
	{
		teacher_name: req.body.teacher_name,
		gender: req.body.gender,
		course: req.body.course,
		email: req.body.email,
		contact: req.body.contact,
		address: req.body.address
	});

	teacher.save(function(err, obj){
		if(err) {
			var api_res = {
				msg: 'There occurred some error',
				err: err
			}
			return res.status(500).send(api_res);
		}
		var api_res = {
			msg: 'Teachers_details Created successfully',
			data: obj
		}
		res.status(201).send(api_res);

	})
};

exports.teachers_list = function(req, res) {
	Teacher.find(req.query, function (err, teacher){



		console.log('req.query');
	    console.log(req.query);
	  //  console.log('req.query.search');
	    //console.log(req.querysearch);
	    console.log('req.params');
	    console.log(req.params);
	   // console.log(window.location.search);

		if(err) return next(err);
		if(teacher) {
			var api_res ={
				msg: 'Teachers are with this information',
				data: teacher
				
			}
			return res.status(500).send(api_res);

				var api_res= {
					msg: 'Teachers are not there with this information'
				
			}
		}
		res.send(api_res);

	})
};

exports.teacher_details = function(req, res) {
	Teacher.findById(req.params.id, function (err, teacher){
		if(err) return next(err);
		if (teacher) {
			var api_res = {
				msg: 'All Good',
				data: teacher
			}
			var status = 200;
		} else {
			var api_res = {
				msg: 'Teacher is Not Found with this ID'
			}
			var status = 404;
		}
		res.status(status).send(api_res);

	})
};


exports.teacher_details_update = function(req, res) {
	Teacher.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, teacher) {
			if(err)
			{
				return next(err);
			} 
			else {
				var api_res = {
					msg: 'Teacher`s Updated details',
					data: req.body	
				}  
			}
			res.status(200).send(api_res);
		})
};

 exports.teacher_details_delete = function (req, res) {
 	Teacher.findByIdAndRemove(req.params.id, function (err, teacher)
 	{ 
 		if(err)
 		{
 		 return next(err)
 		 res.status(404);
 		}
 	    else {
 	    	var api_res = {
 	    		msg: 'Teacher_details is Deleted and Deleted details is given below:',
 	    		data: teacher
 	    	}
 	    }
 		res.status(200).send(api_res);

 	})
 };

