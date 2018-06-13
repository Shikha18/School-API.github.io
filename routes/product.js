var express = require('express');
var router = express.Router();

var Product_controller = require('../controllers/product');

router.get('/test', Product_controller.test);
router.get('/', Product_controller.product_list);
router.get('/:id', Product_controller.product_details);


module.exports = router;

router.post('/', Product_controller.product_create);

router.put('/:id', Product_controller.product_update);

router.delete('/:id',
	Product_controller.product_delete);

