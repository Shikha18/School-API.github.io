var express = require('express');
var router = express.Router();

var Class_controller = require('../controllers/class');

router.get('/test', Class_controller.test);
router.get('/', Class_controller.class_list);
router.get('/:id', Class_controller.class_details); 


module.exports = router;

router.post('/', Class_controller.class_details_create);

router.put('/:id', Class_controller.class_details_update);

router.delete('/:id', Class_controller.class_details_delete);

