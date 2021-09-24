const express = require("express")
const router = express.Router()

const controller = require("./users.controller")

router.get('/add', controller.addUser);
router.get('/edit/:id', controller.editUser);
router.get('/', controller.getUsers);

module.exports = router;