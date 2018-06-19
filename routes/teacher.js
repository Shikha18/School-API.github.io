var express = require('express');
var router = express.Router();

var Teacher_controller = require('../controllers/teacher');

router.get('/test', Teacher_controller.test);
router.get('/', Teacher_controller.teachers_list);
router.get('/:id', Teacher_controller.teacher_details);


module.exports = router;

router.post('/', Teacher_controller.teacher_details_create);

router.put('/:id', Teacher_controller.teacher_details_update);

router.delete('/:id', Teacher_controller.teacher_details_delete);

