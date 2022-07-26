var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projectController');    // get controller

// base route set: /project
router.get('/', projectController.getProjects);

// Note: "/create" has to be placed before "/:projId"
// while "/create" is fixed, "/:projId" is a variable

router.post('/create', projectController.createProject); 

router.get('/:projId', projectController.getProject);

router.put('/:projId/update', projectController.updateProject);

router.delete('/:projId/delete', projectController.deleteProject);

module.exports = router;