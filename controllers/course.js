var Course = require('../models/course');

exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');

};

exports.course_details_create = function (req, res, next) {
	var course = new Course(
	{
		course_name: req.body.course_name,
		syllabus: req.body.syllabus,
		time_period: req.body.time_period
	});

	course.save(function(err, obj){
		if(err) {
			var api_res = {
				msg: 'There occurred some error',
				err: err
			}
			return res.status(500).send(api_res);
		}
		var api_res = {
			msg: 'Course is Created successfully',
			data: obj
		}
		res.status(201).send(api_res);

	})
};

exports.course_list = function(req, res) {
	Course.find(req.query, function (err, course){



		console.log('req.query');
	    console.log(req.query);
	  
	    console.log('req.params');
	    console.log(req.params);
	  

		if(err) return next(err);
		if(course) {
			var api_res ={
				msg: 'Courses are with this information',
				data: course
				
			}
			return res.status(500).send(api_res);

				var api_res= {
					msg: 'Courses are not there with this information'
				
			}
		}
		res.send(api_res);

	})
};

exports.course_details = function(req, res) {
	Course.findById(req.params.id, function (err, course){
		if(err) return next(err);
		if (course) {
			var api_res = {
				msg: 'All Good',
				data: course
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


exports.course_details_update = function(req, res) {
	Course.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, course) {
			if(err)
			{
				return next(err);
			} 
			else {
				var api_res = {

			         msg: 'Course_details Updated',
					 data: req.body	
				}  
			}
			res.status(200).send(api_res);
		})
};

 exports.course_details_delete = function (req, res) {
 	Course.findByIdAndRemove(req.params.id, function (err, course)
 	{ 
 		if(err)
 		{
 		 return next(err)
 		 res.status(404);
 		}
 	    else {
 	    	var api_res = {
 	    		msg: 'Course_details is Deleted and Deleted details is given below:',
 	    		data: course
 	    	}
 	    }
 		res.status(200).send(api_res);

 	})
 };

