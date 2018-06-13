var Product = require('../models/product');
exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');

};

exports.product_create = function (req, res, next) {
	var product = new Product(
	{
           name: req.body.name,
           price: req.body.price

	});

	product.save(function(err, obj){
		if(err) {
			var api_res = {
				msg: 'There occurred some error'
			}
			res.status(500).send(api_res);
		}
		var api_res = {
			msg: 'Product Created successfully',
			data: obj
		}
		res.status(201).send(api_res);
	})
};

exports.product_list = function(req, res) {
	Product.find({}, function (err, product){
		if(err) return next(err);
		res.send(product);

	})
};

exports.product_details = function(req, res) {
	Product.findById(req.params.id, function (err, product){
		if(err) return next(err);
		if (product) {
			var api_res = {
				msg: 'All Good',
				data: product
			}
			var status = 200;
		} else {
			var api_res = {
				msg: 'Product Not Found with this ID'
			}
			var status = 404;
		}
		res.status(status).send(api_res);

	})
};


exports.product_update = function(req, res) {
	Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
			if(err) return next(err);
			res.send('Product updated.');

		})
};

 exports.product_delete = function (req, res) {
 	Product.findByIdAndRemove(req.params.id, function (err)
 	{
 		if(err) return next(err);
 		res.send('Deleted successfully!');

 	})
 };

