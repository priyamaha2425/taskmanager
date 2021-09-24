const service = require("./users.service")

const getUser = (req, res) => {
    service.getUser(req).then(function(user){
        res.status(200).send(user)
    }).catch(function(err){
        res.status(500).send("Internal Server Error")
    })
}

const getUsersById = (req, res)=>{
    service.getUsersById(req).then(function(user){
        res.status(200).send(user)
    }).catch(function(err){
        res.status(500).send("Internal Server Error")
    })
}

const saveUser = (req, res) => {
    service.saveUser(req).then(function(user){
        res.status(201).send(user)
    }).catch(function(err){
        console.log(err)
        res.status(500).send("Internal Server Error")
    })
}

const updUser = (req, res) => {
    service.updUser(req).then(function(user){
        res.status(201).send("Updated successfully");
    }).catch(function(err){
        res.status(500).send("Internal Server Error")
    })
}

const deleUser = (req, res) => {
    service.deleUser(req).then(function(user){
        res.status(201).send("deleted successfully");
    }).catch(function(err){
        res.status(500).send("Internal Server Error")
    })
}

module.exports = {
    getUser,
    getUsersById,
    saveUser,
    updUser,
    deleUser
}