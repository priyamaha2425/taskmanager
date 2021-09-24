const service = require("./tasks.service")

const getTask = (req, res) => {
    service.getTask(req).then(function (task) {
        res.status(200).send(task)
    }).catch(function (err) {
        res.status(500).send("Internal Server Error")
    })
}

const getTaskById = (req, res)=>{
    service.getTaskById(req).then(function(task){
        res.status(200).send(task)
    }).catch(function(err){
        res.status(500).send("Internal Server Error")
    })
}

const saveTask = (req, res) => {
    service.saveTask(req).then(function (task) {
        res.status(201).send(task)
    }).catch(function (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    })
}

const updTask = (req, res) => {
    service.updTask(req).then(function (task) {
        res.status(201).send("Updated successfully");
    }).catch(function (err) {
        res.status(500).send("Internal Server Error")
    })
}

const delTask = (req, res) => {
    service.delTask(req).then(function (task) {
        res.status(201).send("deleted successfully");
    }).catch(function (err) {
        res.status(500).send("Internal Server Error")
    })
}

module.exports = {
    getTask,
    getTaskById,
    saveTask,
    updTask,
    delTask
}