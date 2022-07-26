var express = require('express');
var router = express.Router();

// get controller
var projectController = require('../controllers/projectController');

// base route set: /project

router.get('/', projectController.getProjects);

// Note: "/create" has to be placed before "/:projId"
// while "/create" is fixed, "/:projId" is a variable

router.get('/create', projectController.createProject); 

router.get('/:projId', projectController.getProject);

router.get('/:projId/update', projectController.updateProject);

router.get('/:projId/delete', projectController.deleteProject);

module.exports = router;