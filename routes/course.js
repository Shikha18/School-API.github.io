var express = require('express');
var router = express.Router();

var Course_controller = require('../controllers/course');

router.get('/test', Course_controller.test);
router.get('/', Course_controller.course_list);
router.get('/:id', Course_controller.course_details); 


module.exports = router;

router.post('/', Course_controller.course_details_create);

router.put('/:id', Course_controller.course_details_update);

router.delete('/:id', Course_controller.course_details_delete);
