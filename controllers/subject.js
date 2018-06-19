var Subject = require('../models/subject');

exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');

};

exports.subject_details_create = function (req, res, next) {
	var subject = new Subject(
	{
		sub_name: req.body.sub_name,
		chapters: req.body.chapters
	});

	subject.save(function(err, obj){
		if(err) {
			var api_res = {
				msg: 'There occurred some error',
				err: err
			}
			return res.status(500).send(api_res);
		}
		var api_res = {
			msg: 'Subjects_details Created successfully',
			data: obj
		}
		res.status(201).send(api_res);

	})
};

exports.subjects_list = function(req, res) {
	Subject.find(req.query, function (err, subject){



		console.log('req.query');
	    console.log(req.query);
	  //  console.log('req.query.search');
	    //console.log(req.querysearch);
	    console.log('req.params');
	    console.log(req.params);
	   // console.log(window.location.search);

		if(err) return next(err);
		if(subject) {
			var api_res ={
				msg: 'Subjects are with this information',
				data: subject
				
			}
			return res.status(500).send(api_res);

				var api_res= {
					msg: 'Subjects are not there with this information'
				
			}
		}
		res.send(api_res);

	})
};

exports.subject_details = function(req, res) {
	Subject.findById(req.params.id, function (err, subject){
		if(err) return next(err);
		if (subject) {
			var api_res = {
				msg: 'All Good',
				data: subject
			}
			var status = 200;
		} else {
			var api_res = {
				msg: 'Subject is Not Found with this ID'
			}
			var status = 404;
		}
		res.status(status).send(api_res);

	})
};


exports.subject_details_update = function(req, res) {
	Subject.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, subject) {
			if(err)
			{
				return next(err);
			} 
			else {
				var api_res = {
					msg: 'Subject Updated details',
					data: req.body	
				}  
			}
			res.status(200).send(api_res);
		})
};

 exports.subject_details_delete = function (req, res) {
 	Subject.findByIdAndRemove(req.params.id, function (err, subject)
 	{ 
 		if(err)
 		{
 		 return next(err)
 		 res.status(404);
 		}
 	    else {
 	    	var api_res = {
 	    		msg: 'Subject_details is Deleted and Deleted details is given below:',
 	    		data: teacher
 	    	}
 	    }
 		res.status(200).send(api_res);

 	})
 };
