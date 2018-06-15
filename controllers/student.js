var Student = require('../models/student');
exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');

};

exports.student_details_create = function (req, res, next) {
	var student = new Student(
	{
           Student_name: req.body.Student_name,
           Gender: req.body.Gender,
           Email: req.body.Email,
           Contact: req.body.Contact,
           DOB: req.body.DOB,
           Address: req.body.Address

	});

	student.save(function(err, obj){
		if(err) {
			var api_res = {
				msg: 'There occurred some error'
			}
			res.status(500).send(api_res);
		}
		var api_res = {
			msg: 'Student_details Created successfully',
			data: obj
		}
		res.status(201).send(api_res);
	})
};

exports.students_list = function(req, res) {
	Student.find({}, function (err, student){
		if(err) return next(err);
		res.send(student);

	})
};

exports.student_details = function(req, res) {
	Student.findById(req.params.id, function (err, student){
		if(err) return next(err);
		if (product) {
			var api_res = {
				msg: 'All Good',
				data: student
			}
			var status = 200;
		} else {
			var api_res = {
				msg: 'Student is Not Found with this ID'
			}
			var status = 404;
		}
		res.status(status).send(api_res);

	})
};


exports.student_details_update = function(req, res) {
	Student.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, student) {
			if(err)
			{
				return next(err);
			} 
			else {
				var api_res = {

					msg1: 'Student_s Previous details',
					data1: student,
					msg2: 'Student_s Updated details',
					data: req.body
					
					
				}  


			}
			
			res.status(200).send(api_res);

		})

};

 exports.student_details_delete = function (req, res) {
 	Student.findByIdAndRemove(req.params.id, function (err, student)
 	{ 
 		if(err)
 		{
 		 return next(err)
 		 res.status(404);
 		}
 	    else {
 	    	var api_res = {
 	    		msg: 'Student_details is Deleted and Deleted details is given below:',
 	    		data: student
 	    	}
 	    }
 		res.status(200).send(api_res);

 	})
 };

