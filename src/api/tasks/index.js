const express = require("express")
const router = express.Router()

const controller = require("./task.controller")

router.get('/:id', controller.getTaskById);
router.get('/', controller.getTask);
router.post('/', controller.saveTask);
router.put('/:id', controller.updTask);
router.delete('/:id', controller.delTask);

module.exports = router;