const express = require("express")
const router = express.Router()

const controller = require("./tasks.controller")


router.get('/add', controller.addTask);
router.get('/edit/:id', controller.editTask);
router.get('/', controller.getTasks);

module.exports = router