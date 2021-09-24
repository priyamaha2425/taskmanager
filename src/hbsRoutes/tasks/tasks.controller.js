const usersService = require("../../api/users/users.service")
const tasksService = require("../../api/tasks/tasks.service")

const getTasks = function (req, res) {
    tasksService.getTask(req).then(function (tasks) {
        console.log(tasks)
        res.render("tasks", {
            title: "Tasks",
            tasks
        })
    }).catch(function (error) {
        res.status(500).send("Unable to render")
    })
}

const addTask = function (req, res) {
    usersService.getUser(req).then(function(user){
        res.render("addTask", {
            title: "ADD TASK",
            user
        })
    }).catch(function(error){
        res.status(500).send("Unable to render the page")
    })
}

const editTask = function(req, res){
    tasksService.getTaskById(req).then(function(task){
        res.render("addTask", {
            title: "EDIT TASK",
            task
        })
    }).catch(function(error){
        res.status(500).send("Unable to render");
    })
}

module.exports = {
    getTasks,
    addTask,
    editTask
}