const router = require("express").Router();
const projectController = require("../controllers/projects");

router.get('/', projectController.index);
router.get('/:id', projectController.show);
router.delete('/:id', projectController.delete);
router.put('/:id', projectController.edit);

module.exports = router;