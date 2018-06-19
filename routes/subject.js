var express = require('express');
var router = express.Router();

var Subject_controller = require('../controllers/subject');

router.get('/test', Subject_controller.test);
router.get('/', Subject_controller.subjects_list);
router.get('/:id', Subject_controller.subject_details);


module.exports = router;

router.post('/', Subject_controller.subject_details_create);

router.put('/:id', Subject_controller.subject_details_update);

router.delete('/:id', Subject_controller.subject_details_delete);

