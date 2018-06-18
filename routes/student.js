var express = require('express');
var router = express.Router();

var Student_controller = require('../controllers/student');

router.get('/test', Student_controller.test);
router.get('/', Student_controller.students_list);
router.get('/:id', Student_controller.student_details);


module.exports = router;

router.post('/', Student_controller.student_details_create);

router.put('/:id', Student_controller.student_details_update);

router.delete('/:id', Student_controller.student_details_delete);

