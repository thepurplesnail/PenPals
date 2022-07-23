var express = require('express');
var router = express.Router();

// get controller
var documentController = require('../controllers/documentController.js');

// base route set: /document

router.get('/', documentController.getDocuments);

// Note: "/create" has to be placed before "/:docId"
// while "/create" is fixed, "/:docId" is a variable

router.get('/create', documentController.createDocument); 

router.get('/:docId', documentController.getDocument);

router.get('/:docId/update', documentController.updateDocument);

router.get('/:docId/delete', documentController.deleteDocument);

module.exports = router;