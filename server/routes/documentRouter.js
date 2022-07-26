var express = require('express');
var router = express.Router();
var documentController = require('../controllers/documentController.js');   // get controller

// base route set: /document
router.get('/', documentController.getDocuments);

// Note: "/create" has to be placed before "/:docId"
// while "/create" is fixed, "/:docId" is a variable

router.post('/create', documentController.createDocument); 

router.get('/:docId', documentController.getDocument);

router.put('/:docId/update', documentController.updateDocument);

router.delete('/:docId/delete', documentController.deleteDocument);

module.exports = router;