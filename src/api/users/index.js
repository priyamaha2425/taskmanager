const express = require("express")
const router = express.Router()

const controller = require("./user.controller")

router.get('/:id', controller.getUsersById);
router.get('/', controller.getUser);
router.post('/', controller.saveUser);
router.put('/:id', controller.updUser);
router.delete('/:id', controller.deleUser);

module.exports = router;